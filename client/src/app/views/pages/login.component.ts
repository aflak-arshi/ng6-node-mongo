import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserAuthService } from '../../core/user-auth.service';
import { AuthService } from '../shared/auth.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  	constructor(
  		private router: Router,
  		private userAuthService: UserAuthService,
      private authService: AuthService
  	) { }


  	onSubmit(form: NgForm) {
  		const formValues = form.value;
  		this.userAuthService.login(formValues)
  			.subscribe((data: any) => {
          this.authService.setToken(data.token);
          this.router.navigate(['dashboard']);
  			}, error => {
  				console.log(error);
  			});
  	}


}
