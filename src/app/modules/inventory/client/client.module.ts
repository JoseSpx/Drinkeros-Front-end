import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ComponentsModule } from './../../../shared/components/components.module';
import { MatTableModule } from '@angular/material/table';
import { TableClientsComponent } from './components/table-clients/table-clients.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ClientNewComponent } from './pages/client-new/client-new.component';
import { ClientService } from '../../../shared/services/client.service';
import { TypeDocumentService } from '../../../shared/services/type-document.service';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [
    MainComponent, 
    TableClientsComponent, 
    ClientDetailComponent, 
    FormClientComponent, 
    ClientNewComponent
  ],
  providers : [
    ClientService,
    TypeDocumentService
  ]
})
export class ClientModule { }
