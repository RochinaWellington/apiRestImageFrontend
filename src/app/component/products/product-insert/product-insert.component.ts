import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})

export class ProductInsertComponent implements OnInit {
 
 fileToUpload: File | undefined;
 formData: FormData = new FormData();
 name:string='sssss';
 product?:Product;
  constructor(private productsService:ProductsService) { }

  
  ngOnInit(): void {
  }

  onFileSelected(event:any){
   this.fileToUpload =<File>event.target.files[0]
  // console.log(this.fileToUpload)
   this.formData.append('image', this.fileToUpload, this.fileToUpload.name);
   
   

  }
  
  onUpload(){
    //const formData: FormData = new FormData();
    
    this.formData.append('name',this.name)
    
    this.productsService.postProduct(this.formData)
    .subscribe({
      next: (products) => {
        this.product=products;
        console.log(products)
        
      },
      error: (response) =>{
        console.log(response)
      }
      
    })
    
  }




  
}
