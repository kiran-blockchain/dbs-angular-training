import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ApiService{
    constructor(private http:HttpClient){
        this.cartItems = new Subject<any>();
    }

    ApiGet(url:string){
        let httpHeaders = new HttpHeaders();
        let token = localStorage.getItem("token")?localStorage.getItem("token")?.toString():'';
        if(token==null){
            httpHeaders =httpHeaders.append("authorize",'')
        }
        else{
            httpHeaders =httpHeaders.append("authorize",token);
        }
        
        return this.http.get(url,{headers:httpHeaders});
    }
    ApiPost(url:string,data:any){
        let httpHeaders = new HttpHeaders();
        let token = localStorage.getItem("token")?localStorage.getItem("token")?.toString():'';
        if(token==null){
            httpHeaders =httpHeaders.append("authorize",'')
        }
        else{
            httpHeaders =httpHeaders.append("authorize",token);
        }
        return this.http.post(url,data,{headers:httpHeaders});
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