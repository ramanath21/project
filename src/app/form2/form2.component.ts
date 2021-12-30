import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';
import { Mobile } from '../mobile';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {


  constructor(private httpClient: HttpClient,private router:Router) { }
 
  ngOnInit(): void {
  }
onSubm(data:Mobile){
  this.httpClient.post('http://localhost:8402/api/addm',data).subscribe((result)=>{
    console.log(result)
  })
  alert("product saved successfully");
  this.router.navigate(['/adhome'])
}
}
