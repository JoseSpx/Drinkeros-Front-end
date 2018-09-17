import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ComponentsModule } from './shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InventoryModule } from './modules/inventory/inventory.module';
import { ClientService } from './shared/services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { AdministrationModule } from './modules/administration/administration.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    InventoryModule,
    HttpClientModule,
    AdministrationModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
