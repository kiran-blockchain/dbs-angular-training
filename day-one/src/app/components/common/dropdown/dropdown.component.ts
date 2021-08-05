import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ListItem } from "src/app/models/Dropdown";

@Component({
    templateUrl: "./dropdown.component.html",
    selector: 'dbs-dropdown'
})

export class DropdownComponent implements OnInit {

    @Input()
    data: any;

    @Output()
    onChange: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.data = {
            LabelText: "",
            SelectedValue: "",
            ListItems: [],
            name: "",
            id: ""
        }
    }
    ngOnInit(): void {
        
    }

    handleChange() {
        this.onChange.emit({
            name: this.data.name,
            SelectedValue: this.data.SelectedValue
        });
    }
}