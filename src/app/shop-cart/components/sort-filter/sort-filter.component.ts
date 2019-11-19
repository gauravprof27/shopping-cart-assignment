import { Component, OnInit } from '@angular/core';
import { ApplicationStateManagementService } from '../../services/application-state-management.service';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss']
})
export class SortFilterComponent implements OnInit {

  orderByKey = 'price';
  orderByOrder = false;

  constructor(private appState: ApplicationStateManagementService) {}

  ngOnInit() {
    this.orderByKey = this.appState.getOderByKeys().orderByKey;
    this.orderByOrder = this.appState.getOderByKeys().orderByOrder;
  }

  setOrderByKeys(orderBy, order) {
    this.orderByKey = orderBy;
    this.orderByOrder = order;
    this.appState.setOrderByKeys(this.orderByKey, this.orderByOrder);
  }

}
