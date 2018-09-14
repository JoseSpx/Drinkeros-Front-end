import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../../../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';
import { Provider } from '../../../../../shared/models/Provider';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {

  private id : number;
  public showProgressBar : boolean = true;

  public provider : Provider;

  constructor(
    private route : ActivatedRoute,
    private providerService : ProviderService
  ) { }

  ngOnInit() {
    this.id = this.getParamId();
    this.getProvider(this.id);
  }

  public getParamId() : number {
    let id = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  public getProvider(id : number) {
    this.providerService.findById(id)
      .subscribe(
        data => {
          this.provider = data;
          this.showProgressBar = false;
        }
      )
  }

}
