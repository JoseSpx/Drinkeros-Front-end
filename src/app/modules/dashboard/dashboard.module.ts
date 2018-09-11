import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { StateMoneyComponent } from './components/state-money/state-money.component';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from './../../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ComponentsModule
  ],
  declarations: [MainComponent, StateMoneyComponent, NotificationsComponent]
})
export class DashboardModule { }
