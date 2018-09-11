import { Component, OnInit, Input } from '@angular/core';
import { ActivityPane } from '../../models/ActivityPane';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input()
  public activityData : ActivityPane;

  constructor() { }

  ngOnInit() {
  }

}
