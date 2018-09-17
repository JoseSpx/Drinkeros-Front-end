import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { WorkerNewComponent } from './pages/worker-new/worker-new.component';
import { WorkerDetailComponent } from './pages/worker-detail/worker-detail.component';
import { MatIconModule, MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ComponentsModule } from '../../../shared/components/components.module';
import { TableWorkersComponent } from './components/table-workers/table-workers.component';
import { WorkerService } from '../../../shared/services/worker.service';
import { FormWorkerComponent } from './components/form-worker/form-worker.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    WorkerNewComponent,
    WorkerDetailComponent,
    TableWorkersComponent,
    FormWorkerComponent
  ],
  providers : [
    WorkerService
  ]
})
export class WorkerModule { }
