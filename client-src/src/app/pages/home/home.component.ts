import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LoopBackAuth } from '../../shared/sdk/services';
import { Router } from '@angular/router';
import { SocketIOService } from '../../services/socketio.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})

export class HomeComponent implements OnInit{

  constructor(
    private userService: UserService, 
    private authService: LoopBackAuth,
    private router: Router,
    private socketio: SocketIOService
  ){
    
  }

  ngOnInit(){
  }

  send(){
    this.socketio.sendMessage();
  }
}
