import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Client } from '../../../../../shared/models/Client';
import { Router } from '@angular/router';
import { ClientService } from '../../../../../shared/services/client.service';

declare var swal : any;

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  public displayedColumns : string[] = ['name', 'lastname','email', 'typeDocument', 'document','edit','delete'];
  public dataSource;
  
  @ViewChild(MatPaginator)
  public paginator : MatPaginator;
  
  @Output()
  public loaded = new EventEmitter<boolean>();

  constructor(
    private router : Router,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.getClients();
  }

  public getClients() {
    this.clientService.findAllClients()
     .subscribe(data => {
        this.dataSource = new MatTableDataSource<Client>(data);
        this.dataSource.paginator = this.paginator;
        this.loaded.emit(true);
     });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public goClientDetail(id : number) {
    this.router.navigateByUrl("/inventario/clientes/" + id);
  }

  public deleteClient(id : number) {
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
        this.clientService.deleteClient(id)
          .subscribe(
            () => {
              swal(
                'Eliminado!',
                'El Cliente ha sido eliminado',
                'success'
              )
              this.getClients();
            }
           )
        
      }
    })
  }

}
