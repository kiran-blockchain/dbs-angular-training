import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() {
    this.cartItems= [];
   }

  private cartItems:Array<any>;

  getCartItems(){
    return this.cartItems;
  }
  addToCart(item:any){
    this.cartItems.push(item);
  }
}
