import { Component, OnInit, Input } from '@angular/core';
import { TypeDocument } from '../../../../../shared/models/TypeDocument';
import { typeDocuments } from '../../../../../shared/mocks/typeDocuments';
import { Client } from '../../../../../shared/models/Client';
import { TypeDocumentService } from '../../../../../shared/services/type-document.service';
import { ChangeDetectorRef } from '@angular/core';
import { ClientService } from '../../../../../shared/services/client.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  @Input()
  public state : string;

  @Input()
  public client : Client;

  @Input()
  public typeDocumentList : TypeDocument[];

  @Input()
  public btnText : string;

  public typeDocumentSelected : TypeDocument;
  public typeDocument : TypeDocument; 
  public typeDocumentsList : TypeDocument[] = typeDocuments;

  constructor(
    private cd: ChangeDetectorRef,
    private clientService : ClientService,
    private location : Location
  ) { }

  ngOnInit() {
    this.findDocumentSelected();
    this.setFocus();
  }

  public setFocus() {
    document.getElementById("first_input").focus();
  }  

  public findDocumentSelected() {
    if (this.state == "save") {
      this.typeDocumentSelected = this.typeDocumentsList[0];
      this.typeDocument = this.typeDocumentList[0];
    } else {
      for(let type of this.typeDocumentList) {
        if (this.client.typeDocument.id == type.id) {
          this.typeDocumentSelected = type;
          this.typeDocument = type;
          break;
        }
      }
    }
  }

  public changeTypeDocument($event) {
    for(let type of this.typeDocumentsList) {
      if (type.id == this.typeDocumentSelected.id) {
        this.typeDocument = type;
        break;
      }
    }
    // console.log(this.typeDocument);
  }

  public save() {
    if (this.state == "save") {
      this.client.typeDocument = this.typeDocument;
      this.clientService.saveClient(this.client)
        .subscribe(
          () => this.location.back()
        );

    } else {
      this.client.typeDocument = this.typeDocument;
      this.clientService.updateClient(this.client.id, this.client)
        .subscribe(
          () => this.location.back()
        )
    }

  }

}
