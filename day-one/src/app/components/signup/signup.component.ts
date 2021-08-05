import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
  constructor() {
    this.userProfile = new UserProfile();
    this.countryListInfo = {
      LabelText: "Country",
      SelectedValue: "",
      ListItems: [
        { Key: "", Text: "Select Country" },
        { Key: "IN", Text: "India" },
        { Key: "USA", Text: "USA" }
      ],
      name: "country",
      id: "country"
    };

    this.stateListInfo = {
      LabelText: "State",
      SelectedValue: "",
      ListItems: [{ Key: "", Text: "Select State" }],
      name: "state",
      id: "state"
    }


  }
  showSignUp() {
    return this.userProfile.AgreeTerms;
  }
  disableSingup() {
    return !this.userProfile.AgreeTerms;
  }

}
