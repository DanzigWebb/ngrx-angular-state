import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyConfirmComponent } from './notify-confirm.component';

describe('NotifyConfirmComponent', () => {
  let component: NotifyConfirmComponent;
  let fixture: ComponentFixture<NotifyConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
