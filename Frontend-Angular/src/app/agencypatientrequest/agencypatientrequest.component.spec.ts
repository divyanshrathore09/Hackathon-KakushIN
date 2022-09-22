import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencypatientrequestComponent } from './agencypatientrequest.component';

describe('AgencypatientrequestComponent', () => {
  let component: AgencypatientrequestComponent;
  let fixture: ComponentFixture<AgencypatientrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencypatientrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencypatientrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
