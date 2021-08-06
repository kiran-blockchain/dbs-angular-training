import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class LookupService {
  private GenderList: any;
  CountryList: any;
  navItems: any;
  constructor(private apiSvc: ApiService) {
    this.GenderList = [{
      Key: "M",
      Text: "Male"
    },
    {
      Key: "F",
      Text: "Female"
    }];

    this.navItems = {
      companyName: "DBS",
      menu: [{ name: "Home", link: "/home" }]
    }
    this.CountryList=[];
    this.getCountryList();
  }
  getGenderList() {
    return this.GenderList;
  }
  getCountryList() {
    if (this.CountryList.length == 0) {
      this.apiSvc.ApiGet("https://restcountries.eu/rest/v2/all")
        .subscribe((result: any) => {
          console.log(result);
          this.CountryList = result.map((x: any) => {
            return { Key: x.alpha3Code, Text: x.name }
          })
        },
          err => {
            console.log(err);
          });
    }
  }

}

// getInstanceOfLookupService(){

//     if(LookupService.hasInstance){
//         return LookupService.Instance;
//     }
//     else{
//         let instance  = new LookupService;
//         return instance;
//     }
// }