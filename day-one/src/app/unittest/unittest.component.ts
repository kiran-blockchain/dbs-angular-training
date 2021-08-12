import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'dbs-unittest',
  templateUrl: './unittest.component.html',
  styleUrls: ['./unittest.component.css']
})
export class UnittestComponent implements OnInit {
  name="kiran";
  count=0;
  constructor(private demoSvc:DemoService) { }

  ngOnInit(): void {
    this.demoSvc.addToCart({id:1,name:"john"});
    this.count=this.demoSvc.getCartItems().length;
  }
  handle(){
    this.name="Ravi"
  }
}
