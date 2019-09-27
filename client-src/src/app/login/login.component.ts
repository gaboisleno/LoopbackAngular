import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent {
  title = 'client-src';
  username: string;
  password: string;

  constructor(private userService:UserService) {

  }

  clicked(){
    
    this.userService.login(this.username, this.password);
    
  }
}
