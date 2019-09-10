import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { UserService } from '../services/user.service';


@Component({
  templateUrl: './login.component.html',
})

export class LoginComponent {
  title = 'client-src';
  username: string;
  password: string;

  constructor(private userService: UserService) { }

  clicked(){
    this.userService.test();
  }

  login(){
  	
  }


}
