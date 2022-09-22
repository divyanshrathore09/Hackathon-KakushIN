import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseloginComponent } from './nurselogin.component';

describe('NurseloginComponent', () => {
  let component: NurseloginComponent;
  let fixture: ComponentFixture<NurseloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
