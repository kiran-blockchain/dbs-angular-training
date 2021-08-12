import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from "@angular/core";

@Component({
    templateUrl: "./textbox.component.html",
    selector: 'dbs-text-box'
})

export class TextBoxComponent implements OnInit, OnChanges, OnDestroy{
    
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
    ngOnDestroy(): void {
        console.log("I am moved out")
    }
    ngOnChanges(changes: SimpleChanges): void {
       console.log(changes)
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