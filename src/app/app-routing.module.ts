import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent as DashboardMainComponent } from './modules/dashboard/pages/main/main.component';

const routes : Routes = [
   { path : '', component :  DashboardMainComponent },
   { path : 'inicio', component : DashboardMainComponent },
   { path : '**', redirectTo : '', pathMatch : 'full' }
]

@NgModule({
  exports : [
    RouterModule
  ],
  imports : [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
