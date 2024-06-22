import { Injectable } from '@angular/core';
import{HttpClientModule, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  public url = 'http://localhost:8000';

  constructor(public HttpClient:HttpClient) {

   }

    public get(url:string):Observable<any>{
      return this.HttpClient.get(this.url+url);
    }

    // create a post method
    public post(url:string, data:any):Observable<any>{
      return this.HttpClient.post(this.url+url, data);
    }

    public CreateDepartment(url:string, data:any):Observable<any>{
      return this.HttpClient.post(this.url+url, data);
    }
}
