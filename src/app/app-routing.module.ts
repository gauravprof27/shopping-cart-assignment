import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContaierComponent } from './shop-cart/components/main-contaier/main-contaier.component';
import { CartPageComponent } from './shop-cart/components/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: MainContaierComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
