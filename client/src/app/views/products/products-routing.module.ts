import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Products'
		},
		children: [
			{
				path: 'product-list',
				component: ProductsComponent,
				data: {
					title: 'Products List'
				}
			},
			{
				path: 'add-product',
				component: AddProductComponent,
				data: {
					title: 'Add Products'
				}
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
