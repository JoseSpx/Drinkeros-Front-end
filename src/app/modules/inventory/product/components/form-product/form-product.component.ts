import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../../shared/models/Product';
import { ProductService } from '../../../../../shared/services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input()
  public product : Product;

  @Input()
  public btnText : string;

  @Input()
  public state : string;

  constructor(
    private productService : ProductService,
    private location : Location
  ) { }

  ngOnInit() {
    this.setFocus();
  }

  public setFocus() {
    document.getElementById("first_input").focus();
  } 

  public save() {
    
    if (this.state == "save") {
      this.productService.save(this.product)
        .subscribe(
          () => {
            this.location.back();
          }
        )
    } else {
      this.productService.update(this.product.id, this.product)
        .subscribe(
          () => {
            this.location.back();
          }
        )
    }

  }

}
