import { Injectable } from "@angular/core";

@Injectable()
export class LookupService {
  private GenderList:any;
  navItems:any;
  constructor(){
      this.GenderList=[{
          Key:"M",
          Text:"Male"
      },
      {
        Key:"F",
        Text:"Female"
    }];

    this.navItems={
        companyName:"DBS",
        menu:[{name:"Home", link:"/home"}]
    }
  }
  getGenderList(){
      return this.GenderList;
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