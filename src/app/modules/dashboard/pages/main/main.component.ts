import { Component, OnInit } from '@angular/core';
import { ActivityPane } from '../../../../shared/models/ActivityPane';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public showProgressBar : boolean = true;

  public activities : ActivityPane[] = [
    {
      title : "Últimas Ventas",
      img : "./../../../../../assets/img/cash-register.png"
    },
    {
      title : "Últimas Compras",
      img : "./../../../../../assets/img/discount.png"
    },
    {
      title : "Reportes",
      img : "./../../../../../assets/img/check-mark.png"
    },
    {
      title : "Trabajadores",
      img : "./../../../../../assets/img/manager.png",
      link : "/administracion/trabajadores"
    }
  ]
  
  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.showProgressBar = false;
    }, 500)

  }



}
