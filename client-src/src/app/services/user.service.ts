import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  	test() {
  		return this.http.get('http://localhost:3000/api/clients').subscribe(data => {
  			console.log(data);
  		});
	}

}
