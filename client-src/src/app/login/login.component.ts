import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';


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
    this.userService.login(this.username, this.password).subscribe(response => {
      console.log(response);
    });
  }
}
