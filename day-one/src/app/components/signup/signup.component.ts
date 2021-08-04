import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  UserDetails: any;
  CountryList: any;
  StateList:any;
  constructor() {
    this.UserDetails = {
      gender: "M",
      Country: "USA"
    };
    this.CountryList = [{
      name: "India", value: "IN",
      states: [{ name: "Telangana", value: "TS" },
      { name: "Andhra Pradesh", value: "AP" }
      ]
    },
    {
      name: "United States",
      value: "USA",
      states: [{
        name: "New York",
        value: "NY",
      },
      {
        name: "New Jersy",
        value: "NJ",
      }
      ]
    }]
  }
  signup() {
    console.log(this.UserDetails);
    this.UserDetails.Age = 50;
  }
  loadStates(){
    for(let i=0;i<this.CountryList.length;i++){
      if(this.CountryList[i].value== this.UserDetails.Country){
        this.StateList = this.CountryList[i].states;
        break;
      }
    }
  }


}
