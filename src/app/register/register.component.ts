import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router,private login:LoginService){ }

  ngOnInit(): void {
    
  }
  onSubmit(data:Login){

    this.httpClient.post('http://localhost:8402/api/login',data).subscribe((result)=>{
  
      console.log(result)
  
    })
    this.router.navigate(['/login'])
  
  }

}
