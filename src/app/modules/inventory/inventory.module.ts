import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';


@NgModule({
  imports: [
    CommonModule,
    ClientModule,
    ProviderModule
  ],
  declarations: [
    
  ]
})
export class InventoryModule { }
