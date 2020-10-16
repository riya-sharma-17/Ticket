import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Ticket';
  imgticket=[
    {'img':"assets/images/ticket.jpg"}
  ]
  icons=[
    {'iconURL': 'assets/images/print.png' }
  ]
  ticket=[
    {'numofticket':'2 tickets',
    'date':'17 may 2020',
    'venue':'the sumadhura hall',
  'city':'somenagar,benguluru'}
    
  ]
  moreicon=[
   { 'iconlink':'https://www.whatsapp.com/','path':'assets/images/whatsapp.jpg'}
  ]


  @BlockUI() blockUI: NgBlockUI;
  
}
