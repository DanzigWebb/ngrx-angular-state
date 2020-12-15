import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFsComponent } from './page-fs.component';

describe('PageFsComponent', () => {
  let component: PageFsComponent;
  let fixture: ComponentFixture<PageFsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
