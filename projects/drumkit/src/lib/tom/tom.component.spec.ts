import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomComponent } from './tom.component';

describe('TomComponent', () => {
  let component: TomComponent;
  let fixture: ComponentFixture<TomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
