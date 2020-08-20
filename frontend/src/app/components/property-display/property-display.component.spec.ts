import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDisplayComponent } from './property-display.component';

describe('PropertyDisplayHomepageComponent', () => {
  let component: PropertyDisplayHomepageComponent;
  let fixture: ComponentFixture<PropertyDisplayHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDisplayHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDisplayHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
