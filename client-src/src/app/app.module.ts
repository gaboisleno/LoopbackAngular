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
import { SDKBrowserModule } from './shared/sdk/index';
import { AuthGuard } from './services/auth.guard.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  	BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    SDKBrowserModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
