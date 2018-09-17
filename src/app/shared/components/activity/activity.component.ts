import { Component, OnInit, Input } from '@angular/core';
import { ActivityPane } from '../../models/ActivityPane';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input()
  public activityData : ActivityPane;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  public goTolink() {
    this.router.navigateByUrl(this.activityData.link);
  }

}
