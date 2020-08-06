import { Component } from "@angular/core";

@Component({
    selector:'app-login',
    template:`
        <form>
            User Name: <input [(ngModel)]=userName type='text' name='nm'/><br><br>
            User Password: <input [(ngModel)]=userPass type='password' name='ps'/><br>
            <button type='submit' (click)='checkLogin()'>Submit</button>
        </form>
        <div *ngIf='valid'>
            <p>Login Successful</p>
        </div>
        <div *ngIf='!valid'>
            <p>Login Not Successful</p>
        </div>
        `,
    styles:[]
})
export class LoginCompComponent{
    userName:string;
    userPass:string;
    valid=false;
   
    
    info:string[]=["Sagar","Ayush","Ankur","Stuti","Komal","Saransh","Krishna","Astitva","Utkarsh"];
    pass:string[]=["Sagar@123","Ayush@123","Ankur@123","Stuti@123","Komal@123","Saransh@123","Krishna@123","Astitva@123","Utkarsh@123"];
    checkLogin(){
        console.log('check called');
        var a=this.info.indexOf(this.userName);

        if(a!=-1 && this.pass[a]==this.userPass){
            this.valid=true;  
        }
        else{
            this.valid=false;
        }
    }
}





// import { Component, OnInit } from '@angular/core';
// import { LoginInfo } from "./loginInfo";
// @Component({
//   selector: 'app-login-comp',
//   template: `
//     <form>
//       Enter Username<input [(ngModel)] = Name name ='nm'/>
//       Enter password<input [(ngModel)] = Password name ='pass'/>
//       <button type='submit' (click)='show()'>Login</button>
//       <div *ngIf = 'isValid'><br><br>
//       <b> Login Successful, Hi {{Name}} </b>
//       </div>
      
//       <div *ngIf = '!isValid'>
//       <br><br>
//       <b> Invalid login credentials </b>
//       </div>


//   `,
//   styles: [
//   ]
// })
// export class LoginCompComponent implements OnInit {
//   user1 = new LoginInfo("Stuti","Stuti123");
//   user2 = new LoginInfo("kavita","kavita123");
//   user3 = new LoginInfo("Shubham","Shubham123");
//   user4 = new LoginInfo("Shobhit","Shobhit123");
//   user5 = new LoginInfo("Damini","Damini123");

//   Name:string;
//   Password:string;
//   isValid:boolean;

//   show(){
    
//     if (this.Name == this.user1.username && this.Password == this.user1.password)
//         this.isValid = true;
//     else if (this.Name == this.user2.username && this.Password == this.user2.password)
//         this.isValid = true;
//     else if (this.Name == this.user3.username && this.Password == this.user3.password)
//         this.isValid = true;
//     else if (this.Name == this.user4.username && this.Password == this.user4.password)
//         this.isValid = true;
//     else if (this.Name == this.user5.username && this.Password == this.user5.password)
//         this.isValid = true;  
//     else{
//         this.isValid = false;
//     }
      
//   }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
