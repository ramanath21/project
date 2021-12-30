import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { HeadphoneService } from '../headphone.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartss!:Cart[];
  constructor(private carts:CartService,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.carts.getHeadphone().subscribe((data:Cart[])=>
    {
      console.log(data);
      this.cartss=data;
    }
    );
  }

}
