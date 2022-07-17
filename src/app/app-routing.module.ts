import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInsertComponent } from './component/products/product-insert/product-insert.component';
import { ProductsListComponent } from './component/products/products-list/products-list.component';


const routes: Routes = [
  {
    path:'',
    component:ProductsListComponent
  },

  {
    path:'insertProduct',
    component:ProductInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
