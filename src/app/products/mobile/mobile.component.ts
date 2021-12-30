import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/mobile';
import { MobileService } from 'src/app/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobiles!:Mobile[];
  constructor(private mobileService:MobileService) { }

  ngOnInit(): void {
    this.mobileService.getMobile().subscribe((data:Mobile[])=>
    {
      console.log(data);
      this.mobiles=data;
    }
    );
  }

}
