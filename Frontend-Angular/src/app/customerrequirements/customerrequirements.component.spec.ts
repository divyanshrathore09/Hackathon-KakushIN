import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrequirementsComponent } from './customerrequirements.component';

describe('CustomerrequirementsComponent', () => {
  let component: CustomerrequirementsComponent;
  let fixture: ComponentFixture<CustomerrequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
