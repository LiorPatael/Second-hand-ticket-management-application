import { Component } from '@angular/core';



export class buy_tickets{
  constructor(public date :Date , public phone:number, public details:string, public flag:boolean){}
}


@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})


export class BuyTicketsComponent {
  buy_tickets=[
    {date:new Date(),phone:'052-1234567',details:'מחפש כרטיס למשחק נגד הצהבת', flag:true},
    {date:new Date(),phone:'052-7654321',details:'מחפש כרטיס למשחק נגד הפועל באר שבע ליציע הדרומי', flag:true},
    {date:new Date(),phone:'052-3456789',details:'מחפש כרטיס למשחק נגד מכבי נתניה בכל יציע', flag:true},
    {date:new Date(),phone:'052-6543774',details:'מחפש כרטיס למשחק נגד הצהבת מוכן להציע יותר מעלות', flag:true}
  ]
}
