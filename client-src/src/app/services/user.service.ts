import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserApi} from "../shared/sdk/services";
import { share } from 'rxjs/operators';

@Injectable({
	providedIn: UserApi,
  })
export class UserService {

  constructor(
	private http: HttpClient, 
	private userApi: UserApi) { }

  	login(user, password){
		  return this.userApi.login({user:user, password: password});
  	}
	  
	  test() {
  		return this.http.get('http://localhost:3000/api/clients').subscribe(data => {
  			console.log(data);
  		});
	}

}
