/*
Question 1
1. class MovieTicket {
  bookTicket() {}
  cancelTicket() {}
  calculatePrice() {}
  saveTicket() {}
  sendBookingConfirmation() {}
  generateTicketPDF() {}
}

*/


class MovieTicket{
    constructor(
       public readonly id:string,
       public readonly movieName:string,
       public readonly seatNumber:string,
       public price:number,
       public status:"Booked" |"Cancelled"="Booked"

    ){}
}

class MovieTicketRepository{
    save(ticket:MovieTicket):void{
        console.log("saving ticket",ticket);
    }
}

class BookingConfirmService{
    send(ticket:MovieTicket):void{
        console.log("Sending Ticket",ticket)
    }
}

class GenerateTicketService{
    generate(ticket:MovieTicket):void{
        console.log("Generate ticket",ticket)
    }
}


class MovieTicketBookingService{
    constructor(
        private repo:MovieTicketRepository,
        private conformationService:BookingConfirmService,
        private generateTicket:GenerateTicketService, 
    ){}


    book(ticket:MovieTicket):void{
        console.log("Booking ticket")
        this.repo.save(ticket);
        this.conformationService.send(ticket);
        this.generateTicket.generate(ticket)
    }

    calculatePrice(basePrice:number,tax:number):number{
        return basePrice+tax
    }

    cancel(ticket:MovieTicket):void{
        ticket.status="Cancelled";
        console.log("Ticket is cancelled")
        this.repo.save(ticket);

    }

}


const ticket = new MovieTicket("ijtutukhk","Drishyam","A12",100);

const bookingService = new MovieTicketBookingService(
    new MovieTicketRepository(),
    new BookingConfirmService(),
    new GenerateTicketService(),
);


bookingService.book(ticket);
bookingService.cancel(ticket);