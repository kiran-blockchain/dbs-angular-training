import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dbs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile={
    email:""  
  }
  constructor() { 
   
  }
  validationMessage='';
  ngOnInit(): void {
  }
  onSubmit(form:any){

  }

}
