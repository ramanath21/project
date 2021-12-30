import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { Headphone } from 'src/app/headphone';
import { HeadphoneService } from 'src/app/headphone.service';

@Component({
  selector: 'app-uheadphone',
  templateUrl: './uheadphone.component.html',
  styleUrls: ['./uheadphone.component.css']
})
export class UheadphoneComponent implements OnInit {

 headphones!:Headphone[];
  constructor(private headphoneService:HeadphoneService,private httpClient:HttpClient,private router:Router) { }
cart!:Cart;
  ngOnInit(): void {
    this.headphoneService.getHeadphone().subscribe((data:Headphone[])=>
    {
      console.log(data);
      this.headphones=data;
    }
    );
  }
  submit(data:Headphone){
    this.cart=data;
  
    this.httpClient.post('http://localhost:8402/api/addc',this.cart).subscribe((result)=>{
    console.log(result)
  })
  this.router.navigate(['/aacart'])
  }
}
