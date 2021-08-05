import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userProfile:UserProfile;
  constructor(){
    this.userProfile = new UserProfile();
  }
  showSignUp(){
    return this.userProfile.AgreeTerms;
  }
  disableSingup(){
    return !this.userProfile.AgreeTerms;
  }
    
}
