import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService{
    constructor(private http:HttpClient){

    }

    ApiGet(url:string){
        return this.http.get(url);
    }
    ApiPost(url:string,data:any){
        return this.http.post(url,data);
    }

}