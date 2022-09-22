import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomerrequirementsComponent } from './editcustomerrequirements.component';

describe('EditcustomerrequirementsComponent', () => {
  let component: EditcustomerrequirementsComponent;
  let fixture: ComponentFixture<EditcustomerrequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcustomerrequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcustomerrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
