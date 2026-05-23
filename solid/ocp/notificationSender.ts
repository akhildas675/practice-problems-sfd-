// class NotificationSender {
//   send(type: string) {
//     if (type === "email") {
//       console.log("Sending notification via EMAIL");
//     } else if (type === "sms") {
//       console.log("Sending notification via SMS");
//     } else if (type === "push") {
//       console.log("Sending notification via PUSH");
//     } else {
//       console.log("Unsupported notification type");
//     }
//   }
// }

interface NotificationProvider{
    send():void;
}


class EmailSender implements NotificationProvider{
    send(){
        console.log("Email sending")
    }
}
class SmsSender implements NotificationProvider{
    send(){
        console.log("Sms sending")
    }
}
class PushNotificationSender implements NotificationProvider{
    send(){
        console.log("Push Notification sending")
    }
}


class NotificationService{
    process(sender:NotificationProvider){
        sender.send()
    }
}


const service = new NotificationService();

service.process(new EmailSender())
service.process(new SmsSender())
service.process(new PushNotificationSender())