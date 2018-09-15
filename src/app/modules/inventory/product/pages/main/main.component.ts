import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public showProgressBar : boolean = true;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  public hideProgressBar() {
    this.showProgressBar = false;
  }

  public newProduct() {
    this.router.navigateByUrl("/inventario/productos/nuevo");
  }

}
