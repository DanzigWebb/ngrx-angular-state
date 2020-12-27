import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPolarComponent } from './charts-polar.component';

describe('ChartsPolarComponent', () => {
  let component: ChartsPolarComponent;
  let fixture: ComponentFixture<ChartsPolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsPolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
