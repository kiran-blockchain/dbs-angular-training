import { Component } from "@angular/core";
import { UserProfile } from "src/app/models/UserProfile";

@Component({
    selector: 'dbs-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    Controls = {
        Email: {
            LabelText: "Email",
            SelectedValue: "",
            placeholder: "Enter Email",
            type: "email",
            name: "Email",
            id: "Email"
        },
        Password: {
            LabelText: "Password",
            SelectedValue: "",
            placeholder: "Enter Password",
            type: "password",
            name: "Password",
            id: "Password"
        },
    }
    userProfile:any;
    constructor() {
        this.userProfile = new UserProfile();
    }
    handleSignupChange(data: any) {
        this.userProfile={...this.userProfile,[data.name]:data.SelectedValue};
      } 
      handleClick(){
          
      }
}