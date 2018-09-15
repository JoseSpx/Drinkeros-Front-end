import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ComponentsModule } from '../../../shared/components/components.module';
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductService } from '../../../shared/services/product.service';
import { ProductNewComponent } from './pages/product-new/product-new.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers : [
    ProductService
  ],
  declarations: [
    MainComponent, 
    TableProductsComponent, ProductNewComponent, ProductDetailComponent, FormProductComponent
  ]
})
export class ProductModule { }
