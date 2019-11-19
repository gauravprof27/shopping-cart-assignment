import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { ApplicationStateManagementService } from '../../services/application-state-management.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {
  minVal: number = 0;
  maxVal: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };
  constructor(private apptateService: ApplicationStateManagementService) {}
  ngOnInit() {
    this.minVal = this.apptateService.getPriceFilterValues().minVal;
    this.maxVal = this.apptateService.getPriceFilterValues().maxVal;
  }

  onApplyPriceFilter() {
    this.apptateService.setPriceFilterValues(this.minVal, this.maxVal);
  }
}
