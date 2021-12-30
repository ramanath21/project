import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Ordertable } from '../ordertable';

@Component({
  selector: 'app-aacart',
  templateUrl: './aacart.component.html',
  styleUrls: ['./aacart.component.css']
})
export class AacartComponent implements OnInit {
  carts!:Cart[];
  constructor(private cartservice:CartService,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.cartservice.getHeadphone().subscribe((data:Cart[])=>
    {
      console.log(data);
      this.carts=data;
    }
    );
  }
id!:string;
onSub(data:Ordertable){
  this.httpClient.post('http://localhost:8402/api/addo',data).subscribe((result)=>{
    console.log(result)
    
  })
  this.httpClient.post('http://localhost:8402/api/deleteuser/'+`${data.id}`,data).subscribe((result)=>{
    console.log(result)
      alert("order placed");
  
  })
  
  // this.cartservice.getHead(this.id).subscribe((data:Cart[])=>
  //   {
  //     console.log(data);
     
  //   }
  //   )
  
   this.router.navigate(['/ahome'])
}

onClick(data:Cart){
  this.httpClient.post('http://localhost:8402/api/deleteuser/'+`${data.id}`,data).subscribe((result)=>{
    console.log(result)
  
    this.router.navigate(['/product'])
  })
}
}


