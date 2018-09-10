import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public toggleSideBarEvent = new EventEmitter<boolean>();

  private state : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleSideBar() {
    let sideBar = document.getElementById("sidebar");
    sideBar.classList.toggle("sidebar--hide");
    this.toggleSideBarEvent.emit(true);
  }


}
