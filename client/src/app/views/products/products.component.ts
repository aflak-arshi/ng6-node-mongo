import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../core/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any = [];

  constructor(
  	private router: Router,
  	private productService: ProductsService
  ) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts() {
  	this.productService.getProducts()
  		.subscribe((data: any) => {
  			this.productList = data.message;
  		}, error => {
  			console.log(error);
  		});
  }

  onEditClick(item) {
  	console.log(item);
  	this.productService.shareDate(item);
  	this.router.navigate(['/products/add-product']);
  }

  onDeleteClick(_id) {
  	console.log(_id);
  	this.productService.deleteProduct(_id)
  		.subscribe(data => {
  			console.log(data);
  			this.getProducts();
  		}, error => {
  			console.log(error);
  		});
  }
}
