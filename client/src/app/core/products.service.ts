import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductsService {

    shareDataSubject = new Subject<Products[]>();

  	constructor(
  		private http: HttpClient
  	) { }


  	getProducts() {
  		return this.http.get('product/');
  	}

  	postProduct(product: Products) {
  		return this.http.post('product/', product);
  	}

  	editProduct(product: Products) {
  		return this.http.put(''+ product._id, product);
  	}

  	deleteProduct(id: string) {
  		return this.http.delete('' + id);
  	}

    shareDate(product: Products[]) {
      this.shareDataSubject.next(product);
    }

}


export interface Products {
	_id?: string,
	name: string,
  price: number
}