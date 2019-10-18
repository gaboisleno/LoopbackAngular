import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  username:         string;
  email:            string = ' ';
  password:         string;
  confirmPassword:  string;

  constructor(
    private userService:UserService, 
    private router:Router
    ){
    
    }

  ngOnInit() {
  }
  
  click(){
    this.userService.register(this.email, this.username, this.password)
    .subscribe( () => {
      this.router.navigate(['/']);
    });
    
  }

  emailClass(email){
    var re = /\S+@\S+\.\S+/;
    return (re.test(email)) ? 'form-control' : 'form-control is-invalid';
  }


}
