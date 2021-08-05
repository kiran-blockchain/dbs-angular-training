import { Component, OnInit } from "@angular/core";
import { LookupService } from "src/app/services/lookup.service";

@Component({
    selector:'dbs-header',
    templateUrl:'./app.header.html',
    styleUrls:['./app.header.css']
})
export class AppHeader implements OnInit{
    header:any;
    constructor(private lookupService:LookupService){

    }
    ngOnInit(): void {
       console.log(this.lookupService.getGenderList());
       this.header= this.lookupService.navItems;
       
    }
    
}