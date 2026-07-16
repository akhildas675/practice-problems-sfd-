interface DeliveryFeeStrategy {
    deliveryFee(): number;
}

/* OCP IMPLEMENTATIONS */

class BikeDelivery implements DeliveryFeeStrategy {
    deliveryFee(): number {
        return 50;
    }
}

class CarDelivery implements DeliveryFeeStrategy {
    deliveryFee(): number {
        return 100;
    }
}

class ExpressDelivery implements DeliveryFeeStrategy {
    deliveryFee(): number {
        return 200;
    }
}

/* ENTITY */

class FoodDelivery {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly food: string,
        public readonly address: string,
        public amount: number,
        public status: "ORDERED" | "CANCELLED" = "ORDERED"
    ) {}

    orderFood(): void {
        console.log("Food ordered");
    }

    cancelFood(): void {
        this.status = "CANCELLED";
        console.log("Food cancelled");
    }
}

/* PERSISTENCE */

class FoodOrderRepository {
    save(order: FoodDelivery): void {
        console.log("Order saved");
    }
}

/* BUSINESS RULE */

class CouponApplyService {
    apply(amount: number, discount: number): number {
        return amount - discount;
    }
}

/* COMMUNICATION */

class OrderNotificationService {
    send(order: FoodDelivery): void {
        console.log("Notification sent");
    }
}

/* OUTPUT */

class ReceiptGenerator {
    generate(order: FoodDelivery): void {
        console.log("Receipt generated");
    }
}

/* OCP SERVICE */

class DeliveryFeeService {
    calculate(strategy: DeliveryFeeStrategy): number {
        return strategy.deliveryFee();
    }
}

/* WORKFLOW SERVICE */

class FoodDeliveryService {
    constructor(
        private repository: FoodOrderRepository,
        private notificationService: OrderNotificationService,
        private receiptGenerator: ReceiptGenerator
    ) {}

    placeOrder(order: FoodDelivery): void {
        order.orderFood();

        this.repository.save(order);
        this.notificationService.send(order);
        this.receiptGenerator.generate(order);

        console.log("Order process completed");
    }

    cancelOrder(order: FoodDelivery): void {
        order.cancelFood();

        this.repository.save(order);

        console.log("Order cancellation completed");
    }
}

/* EXECUTION */

const order = new FoodDelivery(
    "1",
    "Akhil",
    "Burger",
    "Kozhikode",
    500
);

const feeService = new DeliveryFeeService();

const fee = feeService.calculate(
    new BikeDelivery()
);

console.log("Delivery Fee:", fee);

const couponService = new CouponApplyService();

const finalAmount = couponService.apply(
    order.amount,
    50
);

console.log("Final Amount:", finalAmount);

const foodService = new FoodDeliveryService(
    new FoodOrderRepository(),
    new OrderNotificationService(),
    new ReceiptGenerator()
);

foodService.placeOrder(order);

foodService.cancelOrder(order);