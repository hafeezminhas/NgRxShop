import {createAction, props} from '@ngrx/store';
import {IProduct} from './state/product';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: IProduct[] }>());

export const loadProductsFail = createAction('[Product] Load Products Failed', props<{ error: any }>());

export const addToCart = createAction('[Product] Add To Cart', props<{ product: IProduct }>());

export const removeFromCart = createAction('[Product] Remove From Cart', props<{ product: IProduct }>());

export const filterProducts = createAction('[Product] Filter Products', props<{ minPrice: number, maxPrice: number }>());
