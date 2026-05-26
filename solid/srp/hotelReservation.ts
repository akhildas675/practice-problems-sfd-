class HotelReservation{
    constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly roomNumber:string,
        public amount:number,
        public status:"Success" |"Cancel" ="Success",
    ) {};


}

    class ReservedRoomRepository{
        reserve(room:HotelReservation):void{
            console.log("Hotel Room reserved")
        }
    }

   class ReservationEmailService{
    send(room:HotelReservation):void{
        console.log("Sending room details")
    }
   }

   class GenerateInvoiceService{
    generate(room:HotelReservation){
        console.log("generate invoice service")
    }
   }


   class HotelReservationService{
    constructor(
        private repo:ReservedRoomRepository,
        private email:ReservationEmailService,
        private invoice:GenerateInvoiceService,
    ) {
        
    }

    book(room:HotelReservation):void{
        this.repo.reserve(room);
        console.log("saved data");

        this.email.send(room);
        this.invoice.generate(room);

        console.log("Room booked successful")
    }

    applyDiscount(basePrice:number,discount:number):number{
        return basePrice-discount
    }

    cancel(room:HotelReservation){
        console.log(room.status="Cancel");
        this.repo.reserve(room)
    }

    
   }

   const room = new HotelReservation("Idsdsd","john","A123",3000);


   const roomBookingService = new HotelReservationService(
    new ReservedRoomRepository(),
    new ReservationEmailService(),
    new GenerateInvoiceService(),

   )

   roomBookingService.book(room);
   roomBookingService.cancel(room)