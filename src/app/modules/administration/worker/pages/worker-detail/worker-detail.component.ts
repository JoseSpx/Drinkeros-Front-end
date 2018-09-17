import { Component, OnInit } from '@angular/core';
import { Worker } from '../../../../../shared/models/Worker';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../../../../../shared/services/worker.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  private id : number;
  public showProgressBar : boolean = true;

  public worker : Worker;

  constructor(
    private route : ActivatedRoute,
    private workerService : WorkerService
  ) { }

  ngOnInit() {
    this.id = this.getParamId();
    this.getWorker(this.id);
  }

  public getParamId() : number {
    let id = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  public getWorker(id : number) {
    this.workerService.findById(id)
      .subscribe(
        data => {
          this.worker = data;
          this.showProgressBar = false;
        }
      )
  }

}
