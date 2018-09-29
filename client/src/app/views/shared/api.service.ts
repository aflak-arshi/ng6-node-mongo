import { Injectable } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpClient  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable()
export class ApiService {

	// private baseUrl: string = "http:localhost:5000";

 //  	constructor(
 //  		private http: HttpClient,
 //  		private authService: AuthService
 //  	) { }

 //  	request(url: string, method: HttpRequest<any>, body?: Object) {
 //  		const headerOptions: any = {
 //  			headers: new HttpHeaders({
 //  				'Content-Type': 'application/json'
 //  			})
 //  		}

 //  		return this.http.request(headerOptions)
 //  			.pipe(catchError(this.onRequestError(res));

 //  	}

 //  	onRequestError(res: Response) {
 //  		const statusCode = res.status
 //  	}

}
