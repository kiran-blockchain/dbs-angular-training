import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/UserProfile';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userProfile: UserProfile;
  countryListInfo: any;
  stateListInfo: any;
  Controls = {
    Email: {
      LabelText: "Email",
      SelectedValue: "",
      placeholder: "Enter Email",
      type: "email",
      name: "Email",
      id: "Email"
    },
    FirstName: {
      LabelText: "FirstName",
      SelectedValue: "",
      placeholder: "Enter First Name",
      type: "text",
      name: "FirstName",
      id: "FirstName"
    },
    LastName: {
      LabelText: "LastName",
      SelectedValue: "",
      placeholder: "Enter Last Name",
      type: "text",
      name: "LastName",
      id: "LastName"
    },
    UserName: {
      LabelText: "UserName",
      SelectedValue: "",
      placeholder: "Enter User Name",
      type: "text",
      name: "UserName",
      id: "UserName"
    },
    Password: {
      LabelText: "Password",
      SelectedValue: "",
      placeholder: "Enter Password",
      type: "password",
      name: "Password",
      id: "Password"
    },
    Age: {
      LabelText: "Age",
      SelectedValue: 0,
      placeholder: "Enter Age",
      type: "number",
      name: "Age",
      id: "Age"
    }
  };
  currentDate= new Date();
  salary =10000;
  phone=1234567890;
  constructor(private lookupSvc:LookupService) {
    this.userProfile = new UserProfile();
    
  }
  ngOnInit(): void {
    this.stateListInfo = {
      LabelText: "State",
      SelectedValue: "",
      ListItems: [{ Key: "", Text: "Select State" }],
      name: "state",
      id: "state"
    };
    this.countryListInfo = {
      LabelText: "Country",
      SelectedValue: "",
      ListItems: [
        { Key: "", Text: "Select Country" },
        { Key: "IN", Text: "India" },
        { Key: "USA", Text: "USA" }
      ],
      name: "Country",
      id: "Country"
    };
   console.log(this.lookupSvc.getGenderList());
  }
  showSignUp() {
    return this.userProfile.AgreeTerms;
  }
  disableSingup() {
    return !this.userProfile.AgreeTerms;
  }
  handleSignupChange(data: any) {
    console.log(data);
    this.userProfile = { ...this.userProfile, [data.name]: data.SelectedValue };
  }
  handleClick(){
    this.lookupSvc.navItems.companyName="D-Banking"
  }
}
