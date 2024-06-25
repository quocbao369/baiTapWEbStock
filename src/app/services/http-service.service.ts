import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'applications/json',
    }),
  };

  constructor(private httpCilent: HttpClient) { }
  public getStocks() : Observable<any>{
    const url = `${this.REST_API_SERVER}/stocks`;
    return this.httpCilent.get<any>(url, this.httpOptions);

  }
  public postStock(body : any): Observable<any>{
    const url = `${this.REST_API_SERVER}/stocks`;
    console.log('postStock=',url);
    console.log('postStock: body',body);
    return this.httpCilent.post<any>(url,body,this.httpOptions);
  }
}
