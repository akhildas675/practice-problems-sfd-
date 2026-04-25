// class User {
//   constructor(public name: string, public email: string) {}

//   save() {
//     console.log("Saving user to DB");
//   }

//   sendWelcomeEmail() {
//     console.log("Sending email to", this.email);
//   }
// }


class Order{
    addItem(){}
    removeFood(){}
    total(){}
    applyDiscount(){}
    
}

class OrderDB{
    save(order:Order){}
}

class OrderConfirm{
    send(order:Order){}
}