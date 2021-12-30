import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { Laptop } from 'src/app/laptop';
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-ulaptop',
  templateUrl: './ulaptop.component.html',
  styleUrls: ['./ulaptop.component.css']
})
export class UlaptopComponent implements OnInit {

  laptops!:Laptop[];
  constructor(private laptopService:LaptopService,private httpClient:HttpClient,private router:Router) { }
  cart!:Cart;
  ngOnInit(): void {
    this.laptopService.getLaptop().subscribe((data:Laptop[])=>
    {
      console.log(data);
      this.laptops=data;
    }
    );
  }
  submitl(data:Laptop){
    this.cart=data;
  
    this.httpClient.post('http://localhost:8402/api/addc',this.cart).subscribe((result)=>{
    console.log(result)
  })
  this.router.navigate(['/aacart'])
  }
}



