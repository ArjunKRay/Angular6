import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=environment.baseUrl;
    
  token=this.route.snapshot.paramMap.get('token');
  constructor(private http:HttpClient,private route:ActivatedRoute){}

  public loginRequest(url:any,data:any):any{
      return this.http.post(this.baseUrl+url,data);
  }
   public registerRequest(url:any,data:any){
   return this.http.post(this.baseUrl+url,data);

   }
  public forgotPassword(url:any){
    return this.http.get(this.baseUrl+url);
  }
  public resetRequest(url:any,data:any):any{
    console.log('data check in reset service ==>',data)
      return this.http.put(this.baseUrl+url,data,{headers:new HttpHeaders().set('token', localStorage.getItem('token'))});
  }


  public getRequest(url:any){
      return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }




}