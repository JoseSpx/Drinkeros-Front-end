import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { TableProvidersComponent } from './components/table-providers/table-providers.component';
import { MatIconModule, MatPaginatorModule, MatFormFieldModule, MatTableModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ComponentsModule } from '../../../shared/components/components.module';
import { ProviderService } from '../../../shared/services/provider.service';
import { ProviderDetailComponent } from './pages/provider-detail/provider-detail.component';
import { ProviderNewComponent } from './pages/provider-new/provider-new.component';
import { FormProviderComponent } from './components/form-provider/form-provider.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers : [
    ProviderService
  ],
  declarations: [
    MainComponent, 
    TableProvidersComponent, ProviderDetailComponent, ProviderNewComponent, FormProviderComponent
  ]
})
export class ProviderModule { }
