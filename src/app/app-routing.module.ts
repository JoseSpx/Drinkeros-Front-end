import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent as DashboardMainComponent } from './modules/dashboard/pages/main/main.component';
import { MainComponent as ClientMainComponent } from './modules/inventory/client/pages/main/main.component';
import { ClientDetailComponent } from './modules/inventory/client/pages/client-detail/client-detail.component';
import { ClientNewComponent } from './modules/inventory/client/pages/client-new/client-new.component';

const routes : Routes = [
   { path : '', component :  DashboardMainComponent },
   { path : 'inicio', component : DashboardMainComponent },
   { 
     path : 'inventario',
     children : [
       { 
         path : 'clientes',
         children : [
           { path : '', component : ClientMainComponent },
           { path : 'nuevo', component : ClientNewComponent },
           { path : ':id', component : ClientDetailComponent }
         ]
       }
     ]
   },
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
