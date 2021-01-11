import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from './state/product';
import {ProductList} from './state/product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return of(ProductList);
  }
}
