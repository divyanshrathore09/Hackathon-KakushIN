import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynurseComponent } from './displaynurse.component';

describe('DisplaynurseComponent', () => {
  let component: DisplaynurseComponent;
  let fixture: ComponentFixture<DisplaynurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaynurseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaynurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
