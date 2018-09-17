import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkerComponent } from './form-worker.component';

describe('FormClientComponent', () => {
  let component: FormWorkerComponent;
  let fixture: ComponentFixture<FormWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
