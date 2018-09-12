import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Client } from '../../../../../shared/models/Client';
import { clients } from '../../../../../shared/mocks/clients';


@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  public displayedColumns : string[] = ['name', 'lastname','email', 'typeDocument', 'document','edit'];
  public dataSource = new MatTableDataSource<Client>(clients);
  
  @ViewChild(MatPaginator)
  public paginator : MatPaginator;
  
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
