import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    
    <button (click)='show()'>Click here</button>
    
    Click counter is: <span>{{counter}}</span>
  `,
  styles: ['p{font-weight:bold;font-size:80;font-family:arial}','span{font-size:50px}'
  

  ]
})
export class CounterComponent implements OnInit {
  counter :number = 101;
  show(){
    this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
