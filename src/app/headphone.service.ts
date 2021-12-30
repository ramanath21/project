import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Headphone } from './headphone';

@Injectable({
  providedIn: 'root'
})
export class HeadphoneService {
  private baseUrl="http://localhost:8402/api/GetHeadphone";

  constructor(private http:HttpClient) { }
  getHeadphone():Observable<Headphone[]>
  {
    return this.http.get<Headphone[]>(`${this.baseUrl}`);
  }
}
