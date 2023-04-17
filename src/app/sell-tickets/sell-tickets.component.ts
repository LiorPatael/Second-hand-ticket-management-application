import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellTicketDataServiceService } from '../service/data/sell-ticket-data-service.service';

export class sell_ticket{

  constructor(
    public name:string,
    public description : string,
    public date : Date,
    public price : number
     ){
      
     }
}
@Component({
  selector: 'app-sell-tickets',
  templateUrl: './sell-tickets.component.html',
  styleUrls: ['./sell-tickets.component.css']
})
  



export class SellTicketsComponent {
  sell_tickets:any
  // sell_tickets=[
  //   {date: new Date(), details: 'מכבי חיפה נגד הפועל באר שבע', price: 90,flag:false},
  //   {date: new Date(), details: 'מכבי חיפה נגד הפועל תל אביב', price: 120,flag:false},
  //   {date: new Date(), details: 'מכבי חיפה נגד מכבי תל אביב', price: 500 ,flag:true}


  // ]

  constructor(private sell_ticketsService:SellTicketDataServiceService,private router:Router){}
  ngOnInit(){
    this.sell_tickets = this.sell_ticketsService.retrieveAllSellTickets('liorpatael').subscribe(
      response=>{
        console.log(response);
        this.sell_tickets=response
      }
    )
  }
  addNewTicketForSell(){
    this.router.navigate(['newTicket']);
  }
}
