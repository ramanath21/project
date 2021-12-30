import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { Mobile } from 'src/app/mobile';
import { MobileService } from 'src/app/mobile.service';

@Component({
  selector: 'app-umobile',
  templateUrl: './umobile.component.html',
  styleUrls: ['./umobile.component.css']
})
export class UmobileComponent implements OnInit {

 
  mobiles!:Mobile[];
  constructor(private mobileService:MobileService,private httpClient: HttpClient,private router:Router) { }
  cart!:Cart;
  ngOnInit(): void {
    this.mobileService.getMobile().subscribe((data:Mobile[])=>
    {
      console.log(data);
      this.mobiles=data;
    }
    );
  }
  submit(data:Mobile){this.cart=data;

    this.httpClient.post('http://localhost:8402/api/addc',this.cart).subscribe((result)=>{
    console.log(result)
  })
  this.router.navigate(['/aacart'])
  }
}
