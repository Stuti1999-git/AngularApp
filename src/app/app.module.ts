import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from "./firstcomp";
import { AppComponent } from './app.component';
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { CounterComponent } from './counter/counter.component';
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { PrintInfoComponent } from './print-info/print-info.component';
import { PrintGreetingsComponent } from './print-greetings/print-greetings.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { LoginNewComponent } from './login-new/login-new.component';





@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    CounterComponent,
    HelloName,
    PrintNameComponent,
    DirectivecompComponent,
    PrintInfoComponent,
    PrintGreetingsComponent,
    LoginCompComponent,
    LoginNewComponent,
    
     
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [FirstComponent],
  //bootstrap:[LuckynumberComponent]
})
export class AppModule { }
