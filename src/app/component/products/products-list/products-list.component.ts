import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProduct()
    .subscribe({
      next: (products) => {
        this.products=products;
        console.log(products)
        
      },
      error: (response) =>{
        console.log(response)
      }
      
    })

  }
  showModalMasInformacion(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea comprar ?',
      text: "Para realizar la compra contactese con el dueño!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
