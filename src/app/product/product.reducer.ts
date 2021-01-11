import {IProduct} from './state/product';
import {createReducer, on} from '@ngrx/store';
import {addToCart, filterProducts, loadProductsFail, loadProductsSuccess, removeFromCart} from './product.action';

export interface ProductState {
  products: IProduct[];
  cart: IProduct[];
  priceFilter: {
    minPrice: number;
    maxPrice: number;
  };
  error: string;
}

export const initialState: ProductState = {
  products: [],
  cart: [],
  priceFilter: { minPrice: 0, maxPrice: 0 },
  error: null
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products, error: '' })),
  on(loadProductsFail, (state, { error }) => ({ ...state, products: [], error })),
  on(addToCart, (state, { product }) => ({ ...state, cart: [...state.cart, product] })),
  on(removeFromCart, (state, { product }) => ({ ...state, cart: state.cart.filter(p => p.id !== product.id) })),
  on(filterProducts, (state, { minPrice, maxPrice }) => ({ ...state, priceFilter: { minPrice, maxPrice } }))
);
