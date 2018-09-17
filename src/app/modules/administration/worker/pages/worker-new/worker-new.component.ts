import { Component, OnInit } from '@angular/core';
import { Worker } from '../../../../../shared/models/Worker';

@Component({
  selector: 'app-worker-new',
  templateUrl: './worker-new.component.html',
  styleUrls: ['./worker-new.component.css']
})
export class WorkerNewComponent implements OnInit {

  public showProgressBar : boolean = true;

  public worker : Worker = {
    name : "",
    lastName : "",
    dni : "",
    phone : "",
    email : "",
    address : ""
  };

  constructor() { }

  ngOnInit() {
    this.showProgressBar = false;
  }

}
