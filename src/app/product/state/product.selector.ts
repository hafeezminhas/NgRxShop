import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from '../product.reducer';

const getProductsState = createFeatureSelector('product');

export const getProducts = createSelector(getProductsState, (state: ProductState) => {
  if (state.priceFilter.minPrice >= 0 && state.priceFilter.maxPrice > 0) {
    return state.products.filter(p => p.price >= state.priceFilter.minPrice && p.price <= state.priceFilter.maxPrice);
  } else {
    return state.products;
  }
});
export const getCart = createSelector(getProductsState, (state: ProductState) => state.cart);

export const getFilters = createSelector(getProductsState, (state: ProductState) => state.priceFilter);
