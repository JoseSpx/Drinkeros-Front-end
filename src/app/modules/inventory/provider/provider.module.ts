import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { TableProvidersComponent } from './components/table-providers/table-providers.component';
import { MatIconModule, MatPaginatorModule, MatFormFieldModule, MatTableModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ComponentsModule } from '../../../shared/components/components.module';
import { ProviderService } from '../../../shared/services/provider.service';


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
    ProviderService
  ],
  declarations: [
    MainComponent, 
    TableProvidersComponent
  ]
})
export class ProviderModule { }
