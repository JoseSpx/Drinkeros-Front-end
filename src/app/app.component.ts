import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public toggleBody($event) {
    let mainBody = document.getElementById("main-body");
    mainBody.classList.toggle("main-body-toggle");
  }


}
