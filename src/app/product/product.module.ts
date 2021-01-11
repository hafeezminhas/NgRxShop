import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product.effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product.reducer';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './product/cart/cart.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, CartComponent, ProductFilterComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects]),

    SharedModule
  ]
})
export class ProductModule { }
