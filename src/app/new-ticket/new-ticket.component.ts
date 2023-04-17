import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sell_ticket } from '../sell-tickets/sell-tickets.component';
import { SellTicketDataServiceService } from '../service/data/sell-ticket-data-service.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {
  newTicket:any
  constructor(private route : ActivatedRoute,
    private router :Router,
    private ticketService:SellTicketDataServiceService
    ){}

  ngOnInit(){
    this.newTicket = new sell_ticket('','',new Date(),0)
    // this.ticketService.createTicket(this.newTicket).subscribe(
    //   data=> {this.newTicket=data
    //   console.log(data)}
      
    // )
  }
  pushTicket(){
    
      // this.ticketService.retrieveTicket(this.newTicket.name,'liorpatael').subscribe(
        
      //   data =>{
      //      this.newTicket = data
      //      console.log(data)
      //   }
      // )
      this.ticketService.createTicket(this.newTicket).subscribe(
        data=> {this.newTicket=data
        console.log(data)}
        
      )
    
    this.router.navigate(['sell-ticket']);
  }
}
