import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USER_KEY !:'auth-user';

  private baseUrl="http://localhost:8402/api/login"

  constructor(private httpClient:HttpClient) { }




 
}
