import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { ApplicationStateManagementService } from '../../services/application-state-management.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartData: Array<Item> = [];
  totalItems: number;
  totalDiscount: number;
  totalCost: number;
  constructor(
    private router: Router,
    private appData: ApplicationStateManagementService
  ) {}

  ngOnInit() {
    this.cartData = [...this.appData.getCartPageData()];
    this.cartData.forEach(data => {
      if (!data.count) {
        data.count = 1;
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  removeOne(id) {
    this.cartData.forEach((data, index) => {
      if (data.id === id) {
        if (data.count === 1) {
          this.cartData.splice(index, 1);
        } else {
          data.count = +data.count - 1;
        }
      }
    });
  }

  addOne(id) {
    this.cartData.forEach((data, index) => {
      if (data.id === id) {
        data.count = +data.count + 1;
      }
    });
  }

  removeItem(id) {
    this.cartData.forEach((data, index) => {
      if (data.id === id) {
        this.cartData.splice(index, 1);
        data.count = 0;
      }
    });
    this.appData.setCartPageData(this.cartData);
  }

  getTotalItems() {
    this.totalItems = 0;
    this.cartData.forEach((data, index) => {
      this.totalItems = this.totalItems + data.count;
    });
    return 'Items (' + this.totalItems + ')';
  }

  getTotalCost() {
    this.totalCost = 0;
    this.cartData.forEach((data, index) => {
      this.totalCost = this.totalCost + data.price * data.count;
    });
    return this.totalCost;
  }

  getTotalDiscount() {
    this.totalDiscount = 0;
    this.cartData.forEach((data, index) => {
      this.totalDiscount =
        this.totalDiscount + (data.price * data.count * data.discount) / 100;
    });
    return this.totalDiscount * -1;
  }

  ngOnDestroy() {
    this.appData.setCartPageData(this.cartData);
  }
}
