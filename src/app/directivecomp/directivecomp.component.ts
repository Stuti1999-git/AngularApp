import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  template: `
  <input type="radio" name="rb" (click)='assign(true)'/>Valid
  <input type="radio" name="rb" (click)='assign(false)'/>InValid

  
    <div *ngIf= 'isValid'>
      <b>You are Valid</b>
  </div>
    <div *ngIf='!isValid'>
      <b>You are Invalid</b>  
    </div>
    <div *ngFor='let c of cities'>
      <p>{{c}}</p>
    </div>
  `,
  styles: [
  ]
})
export class DirectivecompComponent implements OnInit {
  isValid:boolean=false;

  assign(x){
    this.isValid=x;
  }
  constructor() { }

  ngOnInit(): void {
  }
  cities:any[]=["Mumbai","Bareli","Mohali","Chandigarh"];

}
