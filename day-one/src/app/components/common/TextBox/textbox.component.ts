import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./textbox.component.html",
    selector: 'dbs-text-box'
})

export class TextBoxComponent {
    
   @Input()
    data: any;

    constructor() {
        this.data = {
            LabelText: "Send Label Text",
            SelectedValue: "",
            placeholder:"",
            type:"",
            name:"",
            id:""
        }
    }
}