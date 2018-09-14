import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProvidersComponent } from './table-providers.component';

describe('TableProvidersComponent', () => {
  let component: TableProvidersComponent;
  let fixture: ComponentFixture<TableProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
