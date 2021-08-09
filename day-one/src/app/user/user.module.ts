import { NgModule } from "@angular/core";
import { DBSCommonModule } from "../common/common.module";
import { ForgotPasswordComponent } from "../components/forgot-password/forgot-password.component";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";

@NgModule({
    imports:[DBSCommonModule],
    declarations:[LoginComponent,
        SignupComponent,
        ForgotPasswordComponent],
    providers:[],
    exports:[]

})
export class UserModule{

}