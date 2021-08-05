import { Component, Input } from "@angular/core";
import { ListItem } from "src/app/models/Dropdown";

@Component({
    templateUrl: "./dropdown.component.html",
    selector: 'dbs-dropdown'
})

export class DropdownComponent {
    
   @Input()
    data: any;

    constructor() {
        this.data = {
            LabelText: "Send Label Text",
            SelectedValue: "",
            ListItems: [],
            name:"",
            id:""
        }
    }
}