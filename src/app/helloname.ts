import {Component  } from "@angular/core";

@Component({
    selector:'hello-name',
    template:`
    <form>
        Enter your name:<input [(ngModel)]=username name='nm'>
        <button  type='submit'>Submit</button>
        
    </form>
    <p>Hello  {{username}}</p>
    `,
    styles:[]
})
export class HelloName{
   username: string ="noname";

}