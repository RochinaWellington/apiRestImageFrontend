import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsListComponent } from './component/products/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductInsertComponent } from './component/products/product-insert/product-insert.component';

//Ngx lib dropzone
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NavabarComponent } from './component/navbar/navabar/navabar.component';
import { LoginComponent } from './component/Accesos/login/login.component';
import { MainUsuariosComponent } from './component/Accesos/main-usuarios/main-usuarios.component';
import { BarraLateralComponent } from './component/navbar/barra-lateral/barra-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductInsertComponent,
    NavabarComponent,
    LoginComponent,
    MainUsuariosComponent,
    BarraLateralComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
