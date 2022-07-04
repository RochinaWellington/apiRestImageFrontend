import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  baseApiUrl:String= environment.baseApiUrl
  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl+'/products')

  }

  postProduct(formData:FormData):Observable <Product> {
    
    return this.http.post<Product>(this.baseApiUrl+"/products", formData)
    
  
}

}
