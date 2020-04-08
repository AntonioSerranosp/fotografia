import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejasComponent } from './parejas.component';

describe('ParejasComponent', () => {
  let component: ParejasComponent;
  let fixture: ComponentFixture<ParejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
