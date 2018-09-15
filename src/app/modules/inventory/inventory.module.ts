import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';
import { ProductModule } from './product/product.module';


@NgModule({
  imports: [
    CommonModule,
    ClientModule,
    ProviderModule,
    ProductModule
  ],
  declarations: [
    
  ]
})
export class InventoryModule { }
