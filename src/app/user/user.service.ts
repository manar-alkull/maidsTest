import { Injectable } from '@angular/core';
import {UserModel} from "./UserModel";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {Logger} from "../Logger";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiPath="/api/users";
  constructor(private http: HttpClient) { }

  pagesCache:Map<number,UsersApiModel> = new Map<number, UsersApiModel>();

  all(pageNumber:number):Observable<UsersApiModel> {
    if(!this.pagesCache.has(pageNumber)){
      let url:string= `${environment.baseUrl}${this.apiPath}`;
      const params = new HttpParams().append('page', pageNumber+'');
      return this.http.get<UsersApiModel>(url,{params}).pipe(map( usersResponse1 => {
        this.pagesCache.set(pageNumber, usersResponse1);
        return usersResponse1;
      }));

    }
    return of(this.pagesCache.get(pageNumber) as UsersApiModel);
  }

  static usersCache:Map<number,UserModel>=new Map<number, UserModel>();
  get(id:number):Observable<UserModel>{
    if(!UserService.usersCache.has(id)) {
      let url: string = `${environment.baseUrl}${this.apiPath}/${id + ""}`;
      return this.http.get<{ data: UserModel }>(url).pipe(map(userModel => {
        UserService.usersCache.set(id, userModel.data);
        return userModel.data;
      }));
    }
    return of(UserService.usersCache.get(id) as UserModel);
  }
}

export class UsersApiModel {
  page:number;
  per_page:number;
  total:number;
  total_pages:number;
  data:UserModel[];
}
