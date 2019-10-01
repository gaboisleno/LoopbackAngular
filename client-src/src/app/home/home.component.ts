import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoopBackAuth } from '../shared/sdk/services';
import { Router } from '@angular/router';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})

export class HomeComponent {

  constructor(
    private userService:UserService, 
    private authService:LoopBackAuth,
    private router:Router
    ){
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
