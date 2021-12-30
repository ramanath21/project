import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headphone } from '../headphone';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedFile!: File ;
 message!:string;
  base64Data: any;
  retrieveResonse: any;
  brnc!:string;
  natn1!:string;
  natn2!:string;
  natn3!:string;


   constructor(private httpClient: HttpClient,private router:Router) { }
 
  ngOnInit(): void {
  }
onSubmit(data:Headphone){
  this.httpClient.post('http://localhost:8402/api/addh',data).subscribe((result)=>{
    console.log(result)
  })
  alert("product saved successfully");
  this.router.navigate(['/adhome'])
}
}
