import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mobile } from './mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private baseUrl="http://localhost:8402/api/GetMobile";

  constructor(private http:HttpClient) { }
  getMobile():Observable<Mobile[]>
  {
    return this.http.get<Mobile[]>(`${this.baseUrl}`);
  }
}
