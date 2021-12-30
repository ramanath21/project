import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordertable } from './ordertable';

@Injectable({
  providedIn: 'root'
})
export class OrdertableService {

  private baseUrl="http://localhost:8402/api/getod";

  constructor(private http:HttpClient) { }
  getMobile():Observable<Ordertable[]>
  {
    return this.http.get<Ordertable[]>(`${this.baseUrl}`);
  }
}
