import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luckynumber',
  templateUrl: './luckynumber.component.html',
  styleUrls: ['./luckynumber.component.css']
})
export class LuckynumberComponent implements OnInit {
 // luckyNumber :number = 100;
 luckyNumber: number;
  show(){
    this.luckyNumber=Math.round(Math.random()*10);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
