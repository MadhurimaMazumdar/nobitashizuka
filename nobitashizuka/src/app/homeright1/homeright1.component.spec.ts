import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeright1Component } from './homeright1.component';

describe('Homeright1Component', () => {
  let component: Homeright1Component;
  let fixture: ComponentFixture<Homeright1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homeright1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homeright1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
