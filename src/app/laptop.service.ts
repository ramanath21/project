import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laptop } from './laptop';
@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private baseUrl="http://localhost:8402/api/GetLaptop";

  constructor(private http:HttpClient) { }
  getLaptop():Observable<Laptop[]>
  {
    return this.http.get<Laptop[]>(`${this.baseUrl}`);
  }
}
