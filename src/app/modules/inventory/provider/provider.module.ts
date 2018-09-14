import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { TableProvidersComponent } from './components/table-providers/table-providers.component';
import { ClientService } from '../../../shared/services/client.service';
import { MatIconModule, MatPaginatorModule, MatFormFieldModule, MatTableModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ComponentsModule } from '../../../shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers : [
    ClientService
  ],
  declarations: [
    MainComponent, 
    TableProvidersComponent
  ]
})
export class ProviderModule { }
