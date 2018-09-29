import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserAuthService {

  	constructor(
  		private http: HttpClient
  	) { }

  	login(userDetails: Users[]) {
  		return this.http.post('user/login', userDetails);
  	}

  	signup(userDetails: Users[]) {
  		return this.http.post('user/signup', userDetails)
  	}

}

export interface Users {
	_id?: string,
	email: string,
	password: string
}



