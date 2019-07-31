import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
    
 constructor(private http:HttpClient){}

    // public postRequest(url:any, data:any ):any{
    //     return this.http.post(this.baseUrl+url,data);
    // }

    // public putRequest(url:any):any{
    //     return this.http.put(this.baseUrl+url,"",{headers:new HttpHeaders().set("jwtTocken", localStorage.getItem('tocken'))});
    // }

    
    // public deleteRequest(url:any):any{
    //     return this.http.delete(this.baseUrl+url);
    // }

    // public getRequest(url:any, data:any ):any{
    //     return this.http.get(this.baseUrl+url,data);
    // }
  
}