import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajosComponent } from './lista-trabajos.component';

describe('ListaTrabajosComponent', () => {
  let component: ListaTrabajosComponent;
  let fixture: ComponentFixture<ListaTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
