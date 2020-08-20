import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerpageComponent } from './serverpage.component';

describe('ServerpageComponent', () => {
  let component: ServerpageComponent;
  let fixture: ComponentFixture<ServerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
