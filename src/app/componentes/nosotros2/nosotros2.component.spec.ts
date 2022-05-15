import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nosotros2Component } from './nosotros2.component';

describe('Nosotros2Component', () => {
  let component: Nosotros2Component;
  let fixture: ComponentFixture<Nosotros2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nosotros2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nosotros2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
