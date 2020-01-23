import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtDriveComponent } from './viewt-drive.component';

describe('ViewtDriveComponent', () => {
  let component: ViewtDriveComponent;
  let fixture: ComponentFixture<ViewtDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
