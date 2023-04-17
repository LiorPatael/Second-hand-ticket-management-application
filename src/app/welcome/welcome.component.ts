import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})



export class WelcomeComponent {

  name=''
constructor(private route:ActivatedRoute,private router:Router){

  
}
ngOnInit(){
  this.name = this.route.snapshot.params['name']
  
}
sellTicket(){
  this.router.navigate(['sell-ticket'])
}
buyTicket(){
  this.router.navigate(['buy-ticket'])
}
}
