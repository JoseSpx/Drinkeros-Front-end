import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProviderService } from '../../../../../shared/services/provider.service';
import { Provider } from '../../../../../shared/models/Provider';

declare var swal : any;

@Component({
  selector: 'app-table-providers',
  templateUrl: './table-providers.component.html',
  styleUrls: ['./table-providers.component.css']
})
export class TableProvidersComponent implements OnInit {

  public displayedColumns : string[] = ['ruc', 'name', 'email', 'address', 'phone','edit','delete'];
  public dataSource;
  
  @ViewChild(MatPaginator)
  public paginator : MatPaginator;
  
  @Output()
  public loaded = new EventEmitter<boolean>();

  constructor(
    private router : Router,
    private providerService : ProviderService
  ) { }

  ngOnInit() {
    this.getProviders();
  }

  public getProviders() {
    this.providerService.findAll()
     .subscribe(data => {
        this.dataSource = new MatTableDataSource<Provider>(data);
        this.dataSource.paginator = this.paginator;
        this.loaded.emit(true);
     });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public goProviderDetail(id : number) {
    this.router.navigateByUrl("/inventario/proveedores/" + id);
  }

  public deleteProvider(id : number) {
    swal({
      title: 'Está Seguro ?',
      text: "Se eliminará al proveedor!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar!'
    }).then((result) => {
      if (result.value) {
        this.providerService.delete(id)
          .subscribe(
            () => {
              swal(
                'Deleted!',
                'El Proveedor ha sido eliminado',
                'success'
              )
              this.getProviders();
            }
           )
        
      }
    })
  }

}
