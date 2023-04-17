import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SellTicketsComponent, sell_ticket } from 'src/app/sell-tickets/sell-tickets.component';

@Injectable({
  providedIn: 'root'
})
export class SellTicketDataServiceService {

  constructor(private http: HttpClient) { }


retrieveAllSellTickets(username:string){
  return this.http.get<sell_ticket[]>(`http://localhost:8080/sell-ticket/${username}`)
}

retrieveTicket(name:string,username:string){
  return this.http.get<sell_ticket>(`http://localhost:8080/sell-ticket/${username}/${name}`);
}


createTicket(ticket:sell_ticket){
  return this.http.post(`http://localhost:8080/sell-ticket`, ticket);
}

}
