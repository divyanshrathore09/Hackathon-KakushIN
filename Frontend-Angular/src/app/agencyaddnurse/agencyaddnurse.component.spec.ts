import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyaddnurseComponent } from './agencyaddnurse.component';

describe('AgencyaddnurseComponent', () => {
  let component: AgencyaddnurseComponent;
  let fixture: ComponentFixture<AgencyaddnurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyaddnurseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyaddnurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
