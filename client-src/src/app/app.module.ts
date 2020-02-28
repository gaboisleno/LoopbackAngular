import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SDKBrowserModule } from './shared/sdk/index';
import { AuthGuard } from './services/auth.guard.service';
import { UserService } from './services/user.service';
import { SocketIOService } from './services/socketio.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
//
import { RegisterComponent } from './pages/register/register.component'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

/*
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://b1ab4e7be56a433eada97c0dc58ae670@sentry.io/1826472"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    // const eventId = Sentry.captureException(error.originalError || error);
    // Sentry.showReportDialog({ eventId });
  }
}
 */

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  	BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SDKBrowserModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ToolbarComponent
  ],
  providers: [
    AuthGuard,
    UserService,
    SocketIOService
    //{ provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
