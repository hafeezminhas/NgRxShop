import * as fromReducer from './product.reducer';
import { loadProducts } from './product.action';
import {IProduct} from './state/product';
import {ProductState} from './product.reducer';

describe('Products Reducer', () => {
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

  it('Should get all the products', () => {
    const { initialState } = fromReducer;
    const newState: ProductState = {
      products,
      priceFilter: { minPrice: 0, maxPrice: 0 },
      cart: [],
      error: null
    };
    const action = loadProducts();
    const state = fromReducer.productReducer(initialState, action);

    expect(state.products.length).toEqual(0);
    expect(state).not.toBe(newState);
  });


});

