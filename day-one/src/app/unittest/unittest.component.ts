import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbs-unittest',
  templateUrl: './unittest.component.html',
  styleUrls: ['./unittest.component.css']
})
export class UnittestComponent implements OnInit {
  name="kiran";
  constructor() { }

  ngOnInit(): void {
  }
  handle(){
    this.name="Ravi"
  }
}
