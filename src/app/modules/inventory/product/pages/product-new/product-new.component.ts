import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../shared/models/Product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  public showProgressBar : boolean = true;

  public product : Product = {
    codebar : "",
    name : "",
    brand : "",
    description : "",
    productPrice : {
      purchase : 0,
      sale : 0,
      wholesale : 0
    },
    productStock : {
      minimun : 0,
      real : 0,
      physical : 0
    }
  }

  constructor() { }

  ngOnInit() {
    this.showProgressBar = false;
  }

}
