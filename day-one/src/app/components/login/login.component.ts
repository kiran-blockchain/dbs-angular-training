import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfile } from "src/app/models/UserProfile";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'dbs-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy {
    
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
    constructor(private router:Router,private apiService:ApiService) {
        this.userProfile = new UserProfile();
    }
    ngOnDestroy(): void {
        console.log("I am cleaning");
    }
    handleSignupChange(data: any) {
        this.userProfile={...this.userProfile,[data.name]:data.SelectedValue};
      } 
      handleClick(){
          this.apiService.ApiPost("http://51.81.71.198:3000/api/members/login",{
            "EMAIL": "kiranthecoder@gmail.com",
            "PASSWORD": "Test@2021"
          }).subscribe((x:any)=>{
              console.log(x);
              localStorage.setItem("token",x.data.token)
          })
      }

}