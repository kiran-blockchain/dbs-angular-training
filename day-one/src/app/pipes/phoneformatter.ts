import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'phoneformat'
})
export class PhoneFormatter implements PipeTransform {
    transform(input: any, filteringCriteria: any = 'USA') {
        // logic goes here
        if (typeof input == 'number') {
            input = input.toString();
        }
        if (input.length == 10) {
            //formatting logic goes here
            if (filteringCriteria == "IN") {
                input ="+91-"+input.substring(0,5)+"-"+input.substring(5,10);
            }
            else {
                input ="+1-"+ input.substring(0, 3) + "-" + input.substring(3, 6) + "-" + input.substring(6, 10);
            }
        }
        return input;
    }

}