import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {MinimumAge} from './custom.validator'
@Component({
    selector: 'dbs-account',
    templateUrl: "./account.component.html"
})

export class AccountComponent implements OnInit, OnChanges, OnDestroy{
    //Step1
    accountForm: FormGroup;
    
    //#2
    constructor(private formBuilder:FormBuilder) {
        // this.accountForm = new FormGroup({
        //     firstName: new FormControl('',[Validators.required]),
        //     lastName: new FormControl('',[Validators.required])
        // });

        //#3
        this.accountForm = this.formBuilder.group({
            firstName: ['PVS',[Validators.required,
                Validators.minLength(2),
                Validators.maxLength(10),
                Validators.pattern(/^[a-zA-z\s]+$/)
            ]],
            email: ['',[Validators.email,
                
                Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
            ]],
            age:['',null,[MinimumAge]]
           
        })
    }
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    ngOnChanges(simple:SimpleChanges){
        console.log("Avalue in the ui changed")
    }
    validator(ctrlName:any){
       return(!this.accountForm.controls[ctrlName].valid &&
        (this.accountForm.controls[ctrlName]?.dirty 
        || this.accountForm.controls[ctrlName]?.touched ))
    }
    messageCheck(ctrlName:any, validation:any){
        return (this.accountForm.controls[ctrlName].errors?.[validation]);
    }
   


}