import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursedetailComponent } from './nursedetail.component';

describe('NursedetailComponent', () => {
  let component: NursedetailComponent;
  let fixture: ComponentFixture<NursedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
