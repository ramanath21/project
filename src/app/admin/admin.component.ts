import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private Https:HttpClient,private admin:AdminService) { }
  ngOnInit(): void {
    
    
   }
   onSubmit(data:Admin){
    this.Https.post('http://localhost:8402/api/logg',data).subscribe(result=>{
      alert("login successfull");
      this.router.navigate(['/adhome'])
    },error=>alert("product saved successfully"))
    
    
  }

}
