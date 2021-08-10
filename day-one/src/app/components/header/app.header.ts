import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { LookupService } from "src/app/services/lookup.service";

@Component({
    selector:'dbs-header',
    templateUrl:'./app.header.html',
    styleUrls:['./app.header.css']
})
export class AppHeader implements OnInit{
    header:any;
    constructor(private lookupService:LookupService, private apiSvc:ApiService){

    }
    ngOnInit(): void {
       console.log(this.lookupService.getGenderList());
       this.header= this.lookupService.navItems;
       this.apiSvc.retrieveFromCart().subscribe((data:any)=>{
           this.counter= this.counter+1;
       })
    }
    counter=0;
    alphaNumeric="^([a-zA-Z0-9 _-]+)$";
    
}