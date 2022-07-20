import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/Accesos/login/login.component';
import { MainUsuariosComponent } from './component/Accesos/main-usuarios/main-usuarios.component';
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
  },

  {
    path:'login',
    component:LoginComponent
  }
  ,

  {
    path:'homeUsuario',
    component:MainUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
