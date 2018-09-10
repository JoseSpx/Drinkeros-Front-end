import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }