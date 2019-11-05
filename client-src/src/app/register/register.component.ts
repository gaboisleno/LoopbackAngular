import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username:         string;
  email:            string = 'example@example.com';
  password:         string;
  confirmPassword:  string;

  constructor(
    private userService:UserService, 
    private router:Router,
    ){
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.email),
      username: new FormControl(this.username) 
    });
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

  usernameClass(username){

  }

  passwordClass(){
    return (this.password==this.confirmPassword) ? 'form-control' : 'form-control is-invalid';
  }


}
