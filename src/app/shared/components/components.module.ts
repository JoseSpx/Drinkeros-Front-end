import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent,
    ActivityComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ActivityComponent
  ]
})
export class ComponentsModule { }
