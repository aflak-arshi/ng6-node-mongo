import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from '../../auth/token.interceptor';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from '../../core/products.service';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  declarations: [
  	ProductsComponent,
  	AddProductComponent
  ],
  providers: [
  	{
  		provide: HTTP_INTERCEPTORS,
  		useClass: TokenInterceptor,
  		multi: true
  	},
    ProductsService
  ]
})
export class ProductsModule { }
