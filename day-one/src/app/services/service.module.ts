import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiService } from "./api.service";
import { LookupService } from "./lookup.service";
import { UserService } from "./user.service";

@NgModule({
    imports:[
        HttpClientModule
    ],
    providers:[ApiService,LookupService,UserService],
    exports:[HttpClientModule]
})
export class ServiceModule{}