import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../../shared/models/Product';

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

  constructor() { }

  ngOnInit() {
  }

  public save() {
    
  }

}
