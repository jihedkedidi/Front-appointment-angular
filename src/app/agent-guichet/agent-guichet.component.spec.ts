import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGuichetComponent } from './agent-guichet.component';

describe('AgentGuichetComponent', () => {
  let component: AgentGuichetComponent;
  let fixture: ComponentFixture<AgentGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentGuichetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
