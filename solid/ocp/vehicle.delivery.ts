interface VehicleDelivery{
    send():void
}


class BikeDelivery implements VehicleDelivery{
    send(){
        console.log("Bike delivered")
    }
}
class CarDelivery implements VehicleDelivery{
    send(){
        console.log("Car delivered")
    }
}
class DroneDelivery implements VehicleDelivery{
    send(){
        console.log("Drone delivered")
    }
}

class DeliveryService{
    process(vehicleDelivery:VehicleDelivery){
        vehicleDelivery.send()
    }
}


const service = new DeliveryService()

service.process(new BikeDelivery())
service.process(new CarDelivery())
service.process(new DroneDelivery())