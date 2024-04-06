import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: '', redirectTo: '/product-list', pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: 'Details/:index', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
