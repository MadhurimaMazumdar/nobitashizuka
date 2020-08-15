import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeright2Component } from './homeright2.component';

describe('Homeright2Component', () => {
  let component: Homeright2Component;
  let fixture: ComponentFixture<Homeright2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homeright2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homeright2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
