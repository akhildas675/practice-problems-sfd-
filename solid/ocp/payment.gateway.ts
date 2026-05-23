// class PaymentGateway {
//   pay(type: string) {
//     if (type === "stripe") {
//       console.log("Processing payment with STRIPE");
//     } else if (type === "paypal") {
//       console.log("Processing payment with PAYPAL");
//     } else if (type === "razorpay") {
//       console.log("Processing payment with RAZORPAY");
//     } else {
//       console.log("Unknown payment provider");
//     }
//   }
// }



interface PaymentsGateways{
    pay():void
}


class StripePayment implements PaymentsGateways{
    pay(){
        console.log("Stripe payment is successful")
    }
}


class RazorPay implements PaymentsGateways{
    pay(){
        console.log("Razorpay is successful")
    }
}

class PayPal implements PaymentsGateways{
    pay(){
        console.log("Paypal is successful")
    }
}

class PaymentService{
    process(payments:PaymentsGateways){
        payments.pay()
    }
}


const service = new PaymentService();


service.process(new StripePayment)
service.process(new RazorPay)
service.process(new PayPal)