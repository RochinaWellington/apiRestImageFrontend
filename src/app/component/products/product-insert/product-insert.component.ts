import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})

export class ProductInsertComponent implements OnInit {

  files: File[] = [];
  name: string = '';
  product?: Product;
  constructor(private productsService: ProductsService) { }


  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
    console.log(this.files.length)
    if (this.files.length < 1) {
      this.files.push(...event.addedFiles);
    }
    else {
      alert('Solo puede cargar 1 imagen')
    }


  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



  onUpload() {

    if (!this.files[0] || this.name==='') {
      alert('Llene los datos obligatorios')
    }
    else {
      const file_data = this.files[0]
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
