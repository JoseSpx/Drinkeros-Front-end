import { TestBed, inject } from '@angular/core/testing';

import { TypeDocumentService } from './type-document.service';

describe('TypeDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeDocumentService]
    });
  });

  it('should be created', inject([TypeDocumentService], (service: TypeDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
