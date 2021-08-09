import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "../components/common/dropdown/dropdown.component";
import { TextBoxComponent } from "../components/common/TextBox/textbox.component";
import { PhoneFormatter } from "../pipes/phoneformatter";
import { ColorDirective } from "./color.directive";

@NgModule({
    imports:[FormsModule],
    declarations:[TextBoxComponent,
        DropdownComponent,
        PhoneFormatter,
        ColorDirective],
    providers:[],
    exports:[FormsModule,TextBoxComponent,
        DropdownComponent,PhoneFormatter,
        ColorDirective]

})
export class DBSCommonModule{

}