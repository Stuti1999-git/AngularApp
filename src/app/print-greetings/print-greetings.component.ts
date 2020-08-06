import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-greetings',
  template: `
  <form>
  Enter you name<input [(ngModel)] =Name name='nm'/> 

  <button type ='submit'(click)='show()'>Click here</button>
  <p>{{greeting}}, <span></span>  {{Name}}</p>
  </form>
  `,
  styles: [
  ]
})
export class PrintGreetingsComponent implements OnInit {
  greetings:any[]=["Hello", "Hi", "Namaste", "Salaam", "Bonjour"];
  constructor() { }
  Name:string;
  greeting:string;
  x:number;
  show(){
    this.greeting= this.greetings[Math.round(Math.random() * this.greetings.length)];
    
  }

  ngOnInit(): void {
  }

}
