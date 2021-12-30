import { Component, OnInit } from '@angular/core';
import { Headphone } from 'src/app/headphone';
import { HeadphoneService } from 'src/app/headphone.service';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.css']
})
export class HeadphoneComponent implements OnInit {

  headphones!:Headphone[];
  constructor(private headphoneService:HeadphoneService) { }

  ngOnInit(): void {
    this.headphoneService.getHeadphone().subscribe((data:Headphone[])=>
    {
      console.log(data);
      this.headphones=data;
    }
    );
  }
}
