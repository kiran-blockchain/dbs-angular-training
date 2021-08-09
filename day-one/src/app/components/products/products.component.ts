import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  errorMessage:string;
  constructor(private apiSvc: ApiService) {
    this.products = [];
    this.errorMessage="";
  }

  ngOnInit(): void {
    this.apiSvc.ApiGet('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
      .subscribe((result: any) => {
        this.products = result;
      }, (err: any) => {
        this.errorMessage ="Unable to retrieve products"
      })
  }

}
