import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient,private route:ActivatedRoute){}
  token=this.route.snapshot.paramMap.get('token');
  public createNoteRequest(url:any,data:any):any{
      return this.http.post(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

  public updateNoteRequest(url:any,data:any):any{
      return this.http.put(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }


  public getArchive(url:any):any{
      return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

  public getTrash(url:any):any{
    return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token')||'')});
}
public getNoteRequest(url:any):any{
  return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
}

  public  trashRequest(url:any):any{
      return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token')
      )});
  }
  public  archiveRequest(url:any):any{
    return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
}

}


  

