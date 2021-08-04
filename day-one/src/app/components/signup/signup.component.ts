import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   UserDetails:any;
  constructor() {
    this.UserDetails={}
   }
   signup(){
     console.log(this.UserDetails);
     this.UserDetails.Age=50;
   }

 

}
