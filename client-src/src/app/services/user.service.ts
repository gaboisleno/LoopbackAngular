import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserApi} from "../shared/sdk/services";
import { share } from 'rxjs/operators';
import { LoopBackAuth } from '../shared/sdk/services';

@Injectable({
	providedIn: UserApi,
  })
export class UserService {

  constructor(
	private userApi: UserApi,
	private authService:LoopBackAuth,
	private http: HttpClient
	){ 

	}

  	login(user, password){  
		  return this.userApi.login({username:user, password: password});
		}
		
	logout(){
		this.authService.clear();
		this.userApi.logout();
	}
	
	isLoggedIn() {
		return !!(this.authService.getCurrentUserId() && this.authService.getAccessTokenId());
	}
	
	register(email, username, password){
		/*this.http.get(`https://api.trumail.io/v2/lookups/json?email=${email}`).subscribe(data => {
			console.log(data.deliverable);
		});*/
		return this.userApi.create({email: email, username: username, password: password});
	}
}
