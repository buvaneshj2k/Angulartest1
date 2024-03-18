import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'ticketbooking',component:TicketbookingComponent},
    {path:'login/ticketbooking',redirectTo:'ticketbooking',pathMatch:'full'}
];
