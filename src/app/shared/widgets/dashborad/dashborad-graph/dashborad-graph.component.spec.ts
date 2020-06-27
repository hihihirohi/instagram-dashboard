import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradGraphComponent } from './dashborad-graph.component';

describe('DashboradGraphComponent', () => {
  let component: DashboradGraphComponent;
  let fixture: ComponentFixture<DashboradGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
