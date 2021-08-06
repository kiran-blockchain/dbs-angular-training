import { IUserProfile } from "../interfaces/IUserProfile";
import { UserProfile } from "../models/UserProfile";

export class UserService implements IUserProfile{
    GetUserProfile(): string {
        throw new Error("Method not implemented.");
    }
    UpdateUserProfie(): string {
        throw new Error("Method not implemented.");
    }
    Singup(userProfile: UserProfile) {
        throw new Error("Method not implemented.");
    }
    Login(userProfile: UserProfile) {
        throw new Error("Method not implemented.");
    }
    ForgotPassword(email: string) {
        throw new Error("Method not implemented.");
    }
    ResetPassword(otp: string, email: string) {
        throw new Error("Method not implemented.");
    }
}