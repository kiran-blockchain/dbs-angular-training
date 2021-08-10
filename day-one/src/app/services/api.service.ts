import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ApiService{
    constructor(private http:HttpClient){
        this.cartItems = new Subject<any>();
    }

    ApiGet(url:string){
        return this.http.get(url);
    }
    ApiPost(url:string,data:any){
        return this.http.post(url,data);
    }
    private cartItems:Subject<any>;
    addToCart(item:any){
        //Push to cart
        this.cartItems.next(item);
    }
    retrieveFromCart():Observable<any>{
        //Subscribers will recevie a notification
        return this.cartItems.asObservable();
    }

}