import { Injectable } from '@angular/core';
import {UserModel} from "./UserModel";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Logger} from "../Logger";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiPath="/api/users";
  constructor(private http: HttpClient) { }

  all(pageNumber:number=0,per_page:number):Observable<UsersApiModel> {
    Logger.Event("all()");

    let url:string= `${environment.baseUrl}${this.apiPath}?page=${pageNumber}&per_page=${per_page}`;
    const params = new HttpParams().append('page', pageNumber+'');
    params.append('per_page', per_page+'');
    return this.http.get<UsersApiModel>(url,{params});
  }

  get(id:number):Observable<{data:UserModel}>{
    let url:string= `${environment.baseUrl}${this.apiPath}/${id+""}`;
    return this.http.get<{data:UserModel}>(url);
  }
}

export class UsersApiModel {
  page:number;
  per_page:number;
  total:number;
  total_pages:number;
  data:UserModel[];
}
