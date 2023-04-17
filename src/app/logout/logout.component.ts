import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router:Router,private hardCodedAuthenticationService:HardcodedAuthenticationService){}


  ngOnInit(){
    this.hardCodedAuthenticationService.logout();
  }
  goToLogin(){
    this.router.navigate(['login'])
  }


}
