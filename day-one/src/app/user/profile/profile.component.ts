import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'dbs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit ,OnChanges {

  profile={
    email:""  
  }
  constructor() { 
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  validationMessage='';
  ngOnInit(): void {
  }
  onSubmit(form:any){

  }


}
