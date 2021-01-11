import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../state/product';
import {NgPopupsService} from 'ng-popups';
import {Store} from '@ngrx/store';
import {ProductState} from '../../product.reducer';
import {removeFromCart} from '../../product.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: IProduct[];

  constructor(private popups: NgPopupsService, private productStore: Store<ProductState>) { }

  ngOnInit(): void {
  }

  remove(product): void {
    this.popups.confirm(`Are you sure you want to remove this product to cart?`, { title: 'Confirm Removal' }).subscribe(opt => {
      if (opt) {
        this.productStore.dispatch(removeFromCart({ product }));
      }
    });
  }

}
