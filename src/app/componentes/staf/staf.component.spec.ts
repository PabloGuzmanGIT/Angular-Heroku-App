import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefComponent} from './staf.component';

describe('StafComponent', () => {
  let component: ChefComponent;
  let fixture: ComponentFixture<ChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    
});