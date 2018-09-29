import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../views/shared/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

	private baseUrl: string = "http://localhost:5000/";
	constructor(
		public authService: AuthService
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			url: this.baseUrl + request.url,
			setHeaders: {
				Authorization: `Bearer ${this.authService.getToken()}`
			}
		});

		return next.handle(request);
	}
}