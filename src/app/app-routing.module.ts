import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent as DashboardMainComponent} from './modules/dashboard/pages/main/main.component';
import { MainComponent as ClientMainComponent } from './modules/inventory/client/pages/main/main.component';
import { ClientDetailComponent } from './modules/inventory/client/pages/client-detail/client-detail.component';
import { ClientNewComponent } from './modules/inventory/client/pages/client-new/client-new.component';
import { MainComponent as ProviderMainComponent } from './modules/inventory/provider/pages/main/main.component';
import { ProviderNewComponent } from './modules/inventory/provider/pages/provider-new/provider-new.component';
import { ProviderDetailComponent } from './modules/inventory/provider/pages/provider-detail/provider-detail.component';
import { MainComponent as ProductMainComponent } from './modules/inventory/product/pages/main/main.component';
import { ProductNewComponent } from './modules/inventory/product/pages/product-new/product-new.component';
import { ProductDetailComponent } from './modules/inventory/product/pages/product-detail/product-detail.component';


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
       },
       {
         path : 'proveedores',
         children : [
           { path : '', component : ProviderMainComponent },
           { path : 'nuevo', component : ProviderNewComponent },
           { path : ':id', component : ProviderDetailComponent }
         ]
       },
       {
         path : 'productos',
         children : [
           { path : '', component : ProductMainComponent },
           { path : 'nuevo', component : ProductNewComponent },
           { path : ':id', component : ProductDetailComponent }
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
