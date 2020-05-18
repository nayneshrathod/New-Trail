import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './products/product-details.component';
import {ProductEditComponent} from './products/product-edit.component';
import {ProductAddComponent} from './products/product-add.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: {title: 'List Of Items'}
  },
  {
    path: 'product-Details/:id',
    component: ProductDetailsComponent,
    data: {title: 'Product Details'}
  },
  {
    path: 'products-add',
    component: ProductAddComponent,
    data: {title: 'Add Products'}
  },
  {
    path: 'products-edit/:id',
    component: ProductEditComponent,
    data: {title: 'Add Products'}
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
