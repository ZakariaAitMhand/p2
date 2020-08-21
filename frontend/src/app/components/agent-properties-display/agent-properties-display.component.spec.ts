import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPropertiesDisplayComponent } from './agent-properties-display.component';

describe('AgentPropertiesDisplayComponent', () => {
  let component: AgentPropertiesDisplayComponent;
  let fixture: ComponentFixture<AgentPropertiesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPropertiesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPropertiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
