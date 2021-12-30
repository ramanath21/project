import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';
import { Mobile } from '../mobile';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

 
  constructor(private httpClient: HttpClient,private router:Router) { }
 
  ngOnInit(): void {
  }
onSub(data:Laptop){
  this.httpClient.post('http://localhost:8402/api/addl',data).subscribe((result)=>{
    console.log(result)
  })
  alert("product saved successfully");
  this.router.navigate(['/adhome'])
}
}
