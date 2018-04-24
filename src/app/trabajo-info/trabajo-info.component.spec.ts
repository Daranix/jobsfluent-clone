import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoInfoComponent } from './trabajo-info.component';

describe('TrabajoInfoComponent', () => {
  let component: TrabajoInfoComponent;
  let fixture: ComponentFixture<TrabajoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
