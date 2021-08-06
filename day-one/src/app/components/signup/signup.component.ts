import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/UserProfile';
import { ApiService } from 'src/app/services/api.service';
import { LookupService } from 'src/app/services/lookup.service';
import { UserService } from 'src/app/services/user.service';

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
    Phone: {
      LabelText: "Phone",
      SelectedValue: "",
      placeholder: "Enter Phone Number",
      type: "tel",
      name: "Phone",
      id: "Phone"
    },
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
  currentDate = new Date();
  salary = 10000;
  phone = 1234567890;
  constructor(private lookupSvc: LookupService,
    private userSvc: UserService,
    private apiSvc: ApiService
  ) {
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
    this.getCountryList();

  }
  showSignUp() {
    return this.userProfile.AgreeTerms;
  }
  disableSingup() {
    return !this.userProfile.AgreeTerms;
  }
  handleSignupChange(data: any) {
    this.userProfile={...this.userProfile,[data.name]:data.SelectedValue};
  }
  handleClick() {
    let payLoad = {
      "EMAIL": this.userProfile.Email,
      "MOBILE_NUMBER": this.userProfile.Phone,
      "PASSWORD": this.userProfile.Password
    }
    this.apiSvc.ApiPost('http://51.81.71.198:3000/api/members/register', payLoad)
      .subscribe((result: any) => {
        console.log(result);
      },
        err => {
          console.log(err);
        });
  }

  getCountryList() {
    this.countryListInfo.ListItems = this.lookupSvc.CountryList;
  }
}
