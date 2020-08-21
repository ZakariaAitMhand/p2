import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsDisplayComponent } from './agents-display.component';

describe('AgentsDisplayComponent', () => {
  let component: AgentsDisplayComponent;
  let fixture: ComponentFixture<AgentsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
