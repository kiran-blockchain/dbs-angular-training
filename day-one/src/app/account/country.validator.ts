// import { HttpClient } from "@angular/common/http";
// import { AbstractControl, ValidationErrors } from "@angular/forms";
// import { Observable, of } from "rxjs";

// export class CountryValidator{
//     constructor(private http:HttpClient){

//     };

//     CheckCountryValidator(control:AbstractControl):Observable<ValidationErrors>|null{
//         const controlValue = control.value;
//          return this.http.get("https://restcountries.eu/rest/v2/all")
//          .subscribe((x:any)=>{
//             let search= x.find((y:any)=>y.name==controlValue)
//             if(search){
//                 return of( { 'countrycheck': true, 'requiredValue': 18 })
//             }
//             else
//             return null
//          });

//         //return null;

//     }

// }

