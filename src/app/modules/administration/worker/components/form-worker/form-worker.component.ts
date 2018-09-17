import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Worker } from '../../../../../shared/models/Worker';
import { WorkerService } from '../../../../../shared/services/worker.service';

@Component({
  selector: 'app-form-worker',
  templateUrl: './form-worker.component.html',
  styleUrls: ['./form-worker.component.css']
})
export class FormWorkerComponent implements OnInit {

  @Input()
  public state : string;

  @Input()
  public worker : Worker;

  @Input()
  public btnText : string;

  constructor(
    private workerService : WorkerService,
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
      this.workerService.save(this.worker)
        .subscribe(
          () => this.location.back()
        );

    } else {
      this.workerService.update(this.worker.id, this.worker)
        .subscribe(
          () => this.location.back()
        )
    }

  }

}
