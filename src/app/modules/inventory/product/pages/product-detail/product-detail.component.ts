import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../shared/models/Product';
import { ProductService } from '../../../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public showProgressBar : boolean = true;

  public product : Product;
  public id : number;

  constructor(
    private productService : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.getId();
    this.getProduct(this.id);
  }

  public getId() : number {
    let id = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  public getProduct(id : number) {
    this.productService.findById(id)
      .subscribe(
        data => {
          this.product = data;
          this.showProgressBar = false;
        }
      )
  }

}
