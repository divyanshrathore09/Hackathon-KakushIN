import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencynursedetailsComponent } from './agencynursedetails.component';

describe('AgencynursedetailsComponent', () => {
  let component: AgencynursedetailsComponent;
  let fixture: ComponentFixture<AgencynursedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencynursedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencynursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
