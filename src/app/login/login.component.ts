import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private Https:HttpClient,private admin:LoginService) { }
  ngOnInit(): void {
  }
  onSubmit(data:Login){
    this.Https.post('http://localhost:8402/api/log',data).subscribe(result=>{
      alert("login successfull");
      this.router.navigate(['/ahome'])
    },error=>alert("username and password is wrong "))
    
    
  }
}

    