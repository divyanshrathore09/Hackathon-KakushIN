import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyloginComponent } from './agencylogin.component';

describe('AgencyloginComponent', () => {
  let component: AgencyloginComponent;
  let fixture: ComponentFixture<AgencyloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
