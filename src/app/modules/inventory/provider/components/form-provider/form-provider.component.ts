import { Component, OnInit, Input } from '@angular/core';
import { Provider } from '../../../../../shared/models/Provider';
import { ProviderService } from '../../../../../shared/services/provider.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-provider',
  templateUrl: './form-provider.component.html',
  styleUrls: ['./form-provider.component.css']
})
export class FormProviderComponent implements OnInit {

  @Input()
  public state : string;

  @Input()
  public provider : Provider;

  @Input()
  public btnText : string;

  constructor(
    private providerService : ProviderService,
    private location : Location
  ) { }

  ngOnInit() {
    
  }

  public save() {
    if (this.state == "save") {
      this.providerService.save(this.provider)
        .subscribe(
          () => this.location.back()
        )
    } else {
      this.providerService.update(this.provider.id, this.provider)
        .subscribe(
          () => this.location.back()
        )
    }

  }

}
