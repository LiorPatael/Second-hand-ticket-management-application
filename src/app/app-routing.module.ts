import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { SellTicketsComponent } from './sell-tickets/sell-tickets.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'sell-ticket', component: SellTicketsComponent,canActivate:[RouteGuardService]},
  {path:'buy-ticket', component: BuyTicketsComponent,canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
  {path:'newTicket', component: NewTicketComponent,canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
