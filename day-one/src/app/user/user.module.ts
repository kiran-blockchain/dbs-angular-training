import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DBSCommonModule } from "../common/common.module";
import { ForgotPasswordComponent } from "../components/forgot-password/forgot-password.component";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports:[DBSCommonModule],
    declarations:[LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,
        ProfileComponent],
    providers:[],
    exports:[]

})
export class UserModule{

}