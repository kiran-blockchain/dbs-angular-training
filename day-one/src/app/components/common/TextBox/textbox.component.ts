import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    templateUrl: "./textbox.component.html",
    selector: 'dbs-text-box'
})

export class TextBoxComponent implements OnInit {
    
   @Input()
    data: any;

    @Output()
    onChange: EventEmitter<any> = new EventEmitter();


    constructor() {
        this.data = {
            LabelText: "",
            SelectedValue: "",
            placeholder:"",
            type:"",
            name:"",
            id:""
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