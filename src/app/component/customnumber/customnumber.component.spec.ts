import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomnumberComponent } from './customnumber.component';

describe('CustomnumberComponent', () => {
  let component: CustomnumberComponent;
  let fixture: ComponentFixture<CustomnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomnumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
