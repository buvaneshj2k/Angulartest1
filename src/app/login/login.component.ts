import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { TicketbookingComponent } from '../ticketbooking/ticketbooking.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,TicketbookingComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uname:string='';
  upass:string='';
}
