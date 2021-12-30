import { Component, OnInit } from '@angular/core';
import { Ordertable } from '../ordertable';
import { OrdertableService } from '../ordertable.service';

@Component({
  selector: 'app-adhome',
  templateUrl: './adhome.component.html',
  styleUrls: ['./adhome.component.css']
})
export class AdhomeComponent implements OnInit {

  ordertables!:Ordertable[];
  constructor(private productservice:OrdertableService) { }

  ngOnInit(): void {
    history.pushState(null,location.href);
    window.onpopstate = function(){
      history.go(1)
    };
   this.productservice.getMobile().subscribe(data => {
      this.ordertables = data;
    });
   }
}
