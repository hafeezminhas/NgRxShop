import { Component, OnInit } from '@angular/core';
import {IProduct} from '../state/product';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ProductState} from '../product.reducer';
import {addToCart, loadProducts, filterProducts} from '../product.action';
import {getCart, getFilters, getProducts} from '../state/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products$: Observable<IProduct[]>;
  cart$: Observable<IProduct[]>;

  priceFilter: any = { minVal: 0, maxVal: 100000 };

  constructor(private productStore: Store<ProductState>) { }

  ngOnInit(): void {
    this.productStore.dispatch(loadProducts());
    this.products$ = this.productStore.select(getProducts);
    this.cart$ = this.productStore.select(getCart);
    this.productStore.select(getFilters).subscribe(filter => this.priceFilter = filter);
  }

  addToCart(product): void {
    this.productStore.dispatch(addToCart({ product }));
  }

  onPriceFilterChange(e): void {
    console.log(e);
    this.productStore.dispatch(filterProducts(e));
  }
}
