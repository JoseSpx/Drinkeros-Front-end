import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { WorkerService } from '../../../../../shared/services/worker.service';
import { Worker } from '../../../../../shared/models/Worker';

declare var swal : any;

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  public displayedColumns : string[] = ['name', 'lastname','dni', 'phone' ,'edit','delete'];
  public dataSource;
  
  @ViewChild(MatPaginator)
  public paginator : MatPaginator;
  
  @Output()
  public loaded = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private workerService : WorkerService
  ) { }

  ngOnInit() {
    this.getWorkers();
  }

  
  public getWorkers() {
    this.workerService.findAll()
     .subscribe(data => {
        this.dataSource = new MatTableDataSource<Worker>(data);
        this.dataSource.paginator = this.paginator;
        this.loaded.emit(true);
     });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public goWorkerDetail(id : number) {
    this.router.navigateByUrl("/administracion/trabajadores/" + id);
  }

  public deleteWorker(id : number) {
    swal({
      title: 'Está Seguro ?',
      text: "Se eliminará al trabajador!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar!'
    }).then((result) => {
      if (result.value) {
        this.workerService.deleteById(id)
          .subscribe(
            () => {
              swal(
                'Eliminado!',
                'El trabajador ha sido eliminado',
                'success'
              )
              this.getWorkers();
            }
           )
        
      }
    })
  }

}


