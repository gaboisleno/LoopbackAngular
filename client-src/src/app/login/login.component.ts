import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoopBackAuth } from '../shared/sdk/services';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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

  ngOnInit(){
    if (this.authService.getCurrentUserId){
      console.log(this.authService.getCurrentUserData);
      this.router.navigate(['/home']);
    }
  }

  clicked(){
    
    this.userService.login(this.username, this.password).subscribe(
      response => {
        this.authService.setToken(response);
        this.router.navigate(['/home']);
      }, 
      err => {
        return false;
      });;
    
  }
}
