import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFsFilterComponent } from './page-fs-filter.component';

describe('PageFsFilterComponent', () => {
  let component: PageFsFilterComponent;
  let fixture: ComponentFixture<PageFsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
