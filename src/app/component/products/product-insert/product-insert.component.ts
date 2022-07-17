import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})

export class ProductInsertComponent implements OnInit {

  fileToUpload: File[] = [];
  
  name: string = '';
  product?: Product;
  constructor(private productsService: ProductsService) { }


  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.fileToUpload.push(event.target.files[0]);
    console.log('--------------------------------------')
    console.log(this.fileToUpload)
    console.log(this.fileToUpload.length)


  }

  onUpload() {

    if (!this.fileToUpload[0]) {
      alert('Ingrese una imagen')
    }
    else {
      const file_data=this.fileToUpload[0]
      const formData = new FormData(); 
      formData.append('image', file_data)
      formData.append('name', this.name)
      this.productsService.postProduct(formData)
        .subscribe({
          next: (products) => {
            this.product = products;
            console.log(products)

          },
          error: (response) => {
            console.log(response)
          }

        })
    }

  }





}
