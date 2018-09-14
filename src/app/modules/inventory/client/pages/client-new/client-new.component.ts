import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../../shared/models/Client';
import { TypeDocumentService } from '../../../../../shared/services/type-document.service';
import { TypeDocument } from '../../../../../shared/models/TypeDocument';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  public typeDocumentList : TypeDocument[];
  public showProgressBar : boolean = true;
  public client : Client = {
    name : "",
    lastName : "",
    email : "",
    address : "",
    phone : "",
    document : "",
    typeDocument : {
      id : 0,
      name : ""
    }
  }

  constructor(
    private typeDocumentService : TypeDocumentService
  ) { }

  ngOnInit() {
    this.getTypeDocuments();
    // setInterval(() => {
    //   this.showProgressBar = false;
    // }, 1000)
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
