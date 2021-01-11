import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../state/product';
import {Event} from '@angular/router';
import {NgPopupsService} from 'ng-popups';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productList: IProduct[];
  @Output() onCart = new EventEmitter<IProduct>();

  constructor(private popups: NgPopupsService) { }

  ngOnInit(): void {}

  addToCart(prod): void {
    this.popups.confirm(`Are you sure you want to add this product to cart?`, { title: 'Add to Cart' }).subscribe(opt => {
      if (opt) {
        this.onCart.emit(prod);
      }
    });
  }
}
