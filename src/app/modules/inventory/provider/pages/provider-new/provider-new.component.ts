import { Component, OnInit } from '@angular/core';
import { Provider } from '../../../../../shared/models/Provider';

@Component({
  selector: 'app-provider-new',
  templateUrl: './provider-new.component.html',
  styleUrls: ['./provider-new.component.css']
})
export class ProviderNewComponent implements OnInit {

  public showProgressBar : boolean = true;
  public provider : Provider = {
    ruc : "",
    name : "",
    email : "",
    address : "",
    phone :""
  }

  constructor(
  ) { }

  ngOnInit() {
    this.showProgressBar = false;
  }

}
