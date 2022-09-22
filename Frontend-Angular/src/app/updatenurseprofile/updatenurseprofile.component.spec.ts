import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenurseprofileComponent } from './updatenurseprofile.component';

describe('UpdatenurseprofileComponent', () => {
  let component: UpdatenurseprofileComponent;
  let fixture: ComponentFixture<UpdatenurseprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenurseprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenurseprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
