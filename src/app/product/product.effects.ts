import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from './product.service';
import {loadProducts, loadProductsFail, loadProductsSuccess} from './product.action';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() => this.productService.getProducts()
        .pipe(
          map(products => loadProductsSuccess({ products })),
          catchError(error => of(loadProductsFail({ error })))
        )
      )
    )
  );

}
