import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public showProgressBar : boolean = true;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.showProgressBar = false;
    }, 1000)
  }

}
