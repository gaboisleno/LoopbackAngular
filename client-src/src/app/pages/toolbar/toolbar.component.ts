import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LoopBackAuth } from '../../shared/sdk/services';
import { Router } from '@angular/router';


@Component({
  selector:    'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [UserService]
})

export class ToolbarComponent {

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
