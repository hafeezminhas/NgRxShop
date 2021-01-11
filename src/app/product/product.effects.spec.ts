import { TestBed } from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import { ProductState, initialState } from './product.reducer';
import { loadProducts } from './product.action';
import { ProductEffects } from './product.effects';
import {ProductService} from './product.service';
import {IProduct} from './state/product';

const products: IProduct[] = [{
  "id": "1",
  "name": "Apple Watch 6 SE",
  "price": 550,
  "category": "electronics",
  "productImage": "assets/images/smart_tv.png"
}, {
  "id": "2",
  "name": "Apple iPad Pro 3rd Gen",
  "price": 900,
  "category": "electronics",
  "productImage": "assets/images/smart_tv.png"
}];

class MockProductService {
  getProducts(): Observable<IProduct[]> {
    return of(products);
  }
}

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;
  let store: MockStore<ProductState>;
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: ProductService, useClass: MockProductService }
      ]
    });

    effects = TestBed.inject(ProductEffects);
    store = TestBed.inject(MockStore);
    productService = TestBed.inject(ProductService);
  });

  it('should call the load users action effect', (done) => {
    const spy = spyOn(productService, 'getProducts').and.callThrough();
    actions$ = of(loadProducts);
    effects.loadProducts$.subscribe((res) => {
      expect(res).toEqual(loadProducts());
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
