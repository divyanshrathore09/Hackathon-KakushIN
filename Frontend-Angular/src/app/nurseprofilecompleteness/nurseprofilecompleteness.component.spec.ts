import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseprofilecompletenessComponent } from './nurseprofilecompleteness.component';

describe('NurseprofilecompletenessComponent', () => {
  let component: NurseprofilecompletenessComponent;
  let fixture: ComponentFixture<NurseprofilecompletenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseprofilecompletenessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseprofilecompletenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
