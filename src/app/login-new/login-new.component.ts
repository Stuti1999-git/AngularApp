import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-new',
  template: `
    <p>
      login-new works!
    </p>
  `,
  styles: [
  ]
})
export class LoginNewComponent implements OnInit {

 

  constructor() { }
  

  ngOnInit(): void {
    
    this.map.set("Stuti", "xyz");
    console.log(this.map.get("Stuti"));

  }
  getName(){
     x:number = 10;
  }

}
    
    
    


