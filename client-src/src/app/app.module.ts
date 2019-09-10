import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  	BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
