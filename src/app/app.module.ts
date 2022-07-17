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


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductInsertComponent
    
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
