import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContaierComponent } from './components/main-contaier/main-contaier.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { SortPipe } from './pipes/sort.pipe';
import { PricePipe } from './pipes/price.pipe';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { SearchPipe } from './pipes/search.pipe';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContaierComponent,
    ShoppingListComponent,
    SortFilterComponent,
    PriceFilterComponent,
    CartPageComponent,
    SortPipe,
    PricePipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NouisliderModule,
    Ng5SliderModule,
    AngularFontAwesomeModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class ShopCartModule {}
