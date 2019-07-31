import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient,private route:ActivatedRoute){}
  token=this.route.snapshot.paramMap.get('token');
  public createLabelRequest(url:any,data:any):any{
      return this.http.post(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

  public updateLabelRequest(url:any,data:any):any{
      return this.http.put(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }
  public getLabelRequest(url:any):any{
    return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }
  public deleteLabelRequest(url:any):any{
    return this.http.delete(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

public addLabelToNote(url:any){
  return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});


}



}

