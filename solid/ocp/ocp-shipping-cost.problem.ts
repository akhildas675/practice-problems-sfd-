// class ShippingCost {
//   calculate(type: string) {
//     if (type === "standard") return 50;
//     if (type === "express") return 100;
//     if (type === "overnight") return 200;
//     return 0;
//   }
// }



class PaymentService {
  processPayment(type: string) {
    if (type === "creditcard") {
      console.log("Processing credit card payment");
    } else if (type === "paypal") {
      console.log("Processing PayPal payment");
    }
  }
}
