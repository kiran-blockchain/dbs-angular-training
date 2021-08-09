import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "../components/common/dropdown/dropdown.component";
import { TextBoxComponent } from "../components/common/TextBox/textbox.component";
import { PhoneFormatter } from "../pipes/phoneformatter";
import { AlpahbetsDirective } from "./alphabets.directive";
import { ColorDirective } from "./color.directive";

@NgModule({
    imports:[FormsModule,CommonModule],
    declarations:[TextBoxComponent,
        DropdownComponent,
        PhoneFormatter,
        ColorDirective,
    AlpahbetsDirective],
    providers:[],
    exports:[
        CommonModule,
        FormsModule,
        TextBoxComponent,
        DropdownComponent,PhoneFormatter,
        ColorDirective,
    AlpahbetsDirective]

})
export class DBSCommonModule{

}