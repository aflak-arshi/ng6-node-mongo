import { Component } from '@angular/core';
import { AuthService } from '../../views/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent { 

	constructor(
		public authService: AuthService
	) { }
}
