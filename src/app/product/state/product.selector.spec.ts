import { getProducts, getCart, getFilters } from './product.selector';
import {IProduct} from './product';
import {ProductState} from '../product.reducer';

describe("Product Selectors", () => {
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

  it('Should select the products list', () => {
    const initialState: ProductState = {
      products,
      priceFilter: { minPrice: 0, maxPrice: 0 },
      cart: [],
      error: null
    };

    const result = getProducts.projector(initialState);
    expect(result.length).toEqual(2);
    expect(result[0].id).toEqual('1');
  });

  it('Should get the cart Items', () => {
    const initialState: ProductState = {
      products,
      priceFilter: { minPrice: 0, maxPrice: 0 },
      cart: [products[0]],
      error: null
    };

    const result = getCart.projector(initialState);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual('1');
  });

  it('Should get the price filter', () => {
    const initialState: ProductState = {
      products,
      priceFilter: { minPrice: 1, maxPrice: 100 },
      cart: [],
      error: null
    };

    const result = getFilters.projector(initialState);
    expect(result.minPrice).toEqual(1);
    expect(result.maxPrice).toEqual(100);
  });
});
