import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee";
@Component({
  selector: 'app-print-info',
  template: `
    <table>
    <tr>
    <th>Employee Id </th>
    <th>Employee Name </th>
    <th>Employee Age</th>
    <th>Employee Designation </th>
    </tr>

    <tr *ngFor= 'let e of emp' >
    <td>{{e.userid}} </td>
    <td>{{e.username}} </td>
    <td>{{e.userage}} </td>
    <td>{{e.userdesignation}} </td>
    </tr>

    </table>
  `,
  styles: [
  ]
})
export class PrintInfoComponent implements OnInit {
  emp1 = new Employee(100,'Stuti',21,'Trainee');
  emp2 = new Employee(101,'Simant',30,'Trainer');
  emp3 = new Employee(102,'Srishti',35,'Coordinator');
  emp:Employee[] = [this.emp1,this.emp2,this.emp3];
  //doubt
  
  constructor() { }

  ngOnInit(): void {
  }
 
}

// import { Component } from "@angular/core";
// import { GreetingsComponent } from "./greetings";
// @Component({
//     selector:'app-login',
//     template:`
//         <form>
//             User Name: <input [(ngModel)]=userName type='text' name='nm'/><br><br>
//             User Password: <input [(ngModel)]=userPass type='password' name='ps'/><br>
//             <button type='submit' (click)='checkLogin()'>Submit</button>
//         </form>
        
//         <div *ngIf='valid'>
//             <p>Login Successful</p>
//             <p>{{greeting.greetings[firstWord]}} {{userName}}</p>
//         </div>
        
//         <div *ngIf='!valid'>
//             <p>Login Not Successful</p>
//         </div>
    
//     `,
//     styles:[]
// })
// export class Login{
//     userName:string;
//     userPass:string;
//     valid=false;
//     firstWord:number;
//     greeting= new GreetingsComponent();
//     info:string[]=["Sagar","Ayush","Ankur","Stuti","Komal","Saransh","Krishna","Astitva","Utkarsh"];
//     pass:string[]=["Sagar@123","Ayush@123","Ankur@123","Stuti@123","Komal@123","Saransh@123","Krishna@123","Astitva@123","Utkarsh@123"];
//     checkLogin(){
//         console.log('check called');
//         var a=this.info.indexOf(this.userName);
//         if(a!=-1 || this.pass[a]!=this.userPass){
//             this.valid=true;
//             this.firstWord=Math.round(Math.random()*5);
//         }
//         else{
//             this.valid=false;
//         }
//     }
// }