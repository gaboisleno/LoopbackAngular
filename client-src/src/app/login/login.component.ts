import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoopBackAuth } from '../shared/sdk/services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent {
  title = 'client-src';
  username: string;
  password: string;

  constructor(
    private userService:UserService, 
    private authService:LoopBackAuth,
    private router:Router
    ){
  }

  clicked(){
    
    this.userService.login(this.username, this.password).subscribe(
      response => {
        this.authService.setToken(response);
        this.router.navigate(['/register']);
      }, 
      err => {
        return false;
      });;
    
  }
}
