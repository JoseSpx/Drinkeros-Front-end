import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../../shared/models/Client';
import { ClientService } from '../../../../../shared/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { TypeDocumentService } from '../../../../../shared/services/type-document.service';
import { TypeDocument } from '../../../../../shared/models/TypeDocument';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  private id : number;
  public showProgressBar : boolean = true;

  public client : Client;
  public typeDocumentList : TypeDocument[];

  constructor(
    private route : ActivatedRoute,
    private clientService : ClientService,
    private typeDocumentService : TypeDocumentService
  ) { }

  ngOnInit() {
    this.id = this.getParamId();
    this.getClient(this.id);
  }

  public getParamId() : number {
    let id = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  public getClient(id : number) {
    this.clientService.findClientByID(id)
      .subscribe(
        data => {
          this.client = data;
          this.getTypeDocuments();
        }
      )
  }

  public getTypeDocuments() {
    this.typeDocumentService.findAll()
      .subscribe(
        data => {
          this.typeDocumentList = data;
          this.showProgressBar = false;
        }
      )
  }

}
