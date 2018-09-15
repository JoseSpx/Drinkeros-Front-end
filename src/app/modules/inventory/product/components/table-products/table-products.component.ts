import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProductService } from '../../../../../shared/services/product.service';
import { Product } from '../../../../../shared/models/Product';

declare var swal : any;

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  public displayedColumns : string[] = ['codebar', 'name','brand', 'priceSale', 'stockPhisycal','edit','delete'];
  public dataSource;
  
  @ViewChild(MatPaginator)
  public paginator : MatPaginator;
  
  @Output()
  public loaded = new EventEmitter<boolean>();

  constructor(
    private router : Router,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.productService.findAll()
     .subscribe(data => {
        this.dataSource = new MatTableDataSource<Product>(data);
        this.dataSource.paginator = this.paginator;
        this.loaded.emit(true);
     });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public goDetail(id : number) {
    this.router.navigateByUrl("/inventario/productos/" + id);
  }

  public deleteById(id : number) {
    swal({
      title: 'Está Seguro ?',
      text: "Se eliminará al cliente!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar!'
    }).then((result) => {
      if (result.value) {
        this.productService.delete(id)
          .subscribe(
            () => {
              swal(
                'Eliminado!',
                'El Producto ha sido eliminado',
                'success'
              )
              this.getProducts();
            }
           )
        
      }
    })
  }

}


