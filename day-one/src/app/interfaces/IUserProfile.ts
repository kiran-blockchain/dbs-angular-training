import { UserProfile } from "../models/UserProfile";

export interface IUserProfile {
   Singup(userProfile:UserProfile):any;
   Login(userProfile:UserProfile):any;
   ForgotPassword(email:string):any;
   ResetPassword(otp:string,email:string):any;
};