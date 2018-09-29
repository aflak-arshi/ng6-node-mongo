import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../core/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

	productForm: FormGroup;

  	products: any = [];
  
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
	  	private productService: ProductsService
	) { }

	ngOnInit() {
		this.createForm();
	  	this.getSharedData();
	}

	createForm() {
		this.productForm = this.formBuilder.group({
			product_name: new FormControl(),
			price: new FormControl()
		});
	}

  getSharedData() {
  	this.productService.shareDataSubject
  		.subscribe((data: any) => {
  			this.products = data;
  			console.log(this.products);

  			this.productForm.setValue({
  				product_name: this.products.product_name,
  				price: this.products.price
  			});
  		}, error => {
  			console.log(error);
  		});
  }

  onSubmit() {
  	const formValues = this.productForm.value;
  	this.productService.postProduct(formValues)
  		.subscribe(data => {
  			setTimeout(() => {
  				this.router.navigate(['/products/product-list']);
  			}, 1000);
  		}, error => {
  			console.log(error);
  		});
  }
}
