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
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ButtonBackComponent } from './button-back/button-back.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent,
    ActivityComponent,
    TitleBarComponent,
    ProgressBarComponent,
    ButtonBackComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ActivityComponent,
    TitleBarComponent,
    ProgressBarComponent,
    ButtonBackComponent
  ]
})
export class ComponentsModule { }
