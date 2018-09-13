import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  public showProgressBar : boolean = true;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.showProgressBar = false;
    }, 1000)
  }

}
