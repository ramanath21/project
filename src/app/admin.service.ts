import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  USER_KEY !:'auth-user';
  private baseUrl="http://localhost:8402/api/p/geta/"
  constructor(private httpClient:HttpClient) { }

  getAllAdmin(id:string):Observable<Admin[]>{
    return  this.httpClient.get<Admin[]>(`${this.baseUrl}${id}`);
  }
  public saveUser(user: any):void{
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY,JSON.stringify(user));
        
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
