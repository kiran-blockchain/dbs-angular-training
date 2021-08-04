import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email:string;//Declaration
  constructor() { 
    this.email='kiran@gmail.com';//Initialization
  }
  handleClick(){
    console.log(this.email);
  }
}
