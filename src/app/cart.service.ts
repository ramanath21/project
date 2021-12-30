import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl="http://localhost:8402/api/geto";
  private baseUrl1="http://localhost:8402/api/deleteuser/";

  constructor(private http:HttpClient) { }
  getHeadphone():Observable<Cart[]>
  {
    return this.http.get<Cart[]>(`${this.baseUrl}`);
  }
  getHead(id:string):Observable<Cart[]>
  {
    return this.http.get<Cart[]>(`${this.baseUrl1}${id}`);
  }
}
