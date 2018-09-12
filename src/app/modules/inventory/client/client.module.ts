import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ComponentsModule } from './../../../shared/components/components.module';
import { MatTableModule } from '@angular/material/table';
import { TableClientsComponent } from './components/table-clients/table-clients.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [MainComponent, TableClientsComponent, ClientDetailComponent]
})
export class ClientModule { }
