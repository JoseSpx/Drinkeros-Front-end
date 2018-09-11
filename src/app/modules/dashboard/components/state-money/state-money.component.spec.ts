import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMoneyComponent } from './state-money.component';

describe('StateMoneyComponent', () => {
  let component: StateMoneyComponent;
  let fixture: ComponentFixture<StateMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
