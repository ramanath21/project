import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/laptop';
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  laptops!:Laptop[];
  constructor(private laptopService:LaptopService) { }

  ngOnInit(): void {
    this.laptopService.getLaptop().subscribe((data:Laptop[])=>
    {
      console.log(data);
      this.laptops=data;
    }
    );
  }

}
