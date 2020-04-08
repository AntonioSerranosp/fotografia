import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialsComponent } from './comercials.component';

describe('ComercialsComponent', () => {
  let component: ComercialsComponent;
  let fixture: ComponentFixture<ComercialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
