import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ListItem } from "src/app/models/Dropdown";

@Component({
    templateUrl: "./dropdown.component.html",
    selector: 'dbs-dropdown'
})

export class DropdownComponent {

    @Input()
    data: any;

    @Output()
    onChange: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.data = {
            LabelText: "Send Label Text",
            SelectedValue: "",
            ListItems: [],
            name: "",
            id: ""
        }
    }

    handleChange() {
        this.onChange.emit({
            name: this.data.name,
            SelectedValue: this.data.SelectedValue
        });
    }
}