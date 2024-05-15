import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAgentComponent } from './counter-agent.component';

describe('CounterAgentComponent', () => {
  let component: CounterAgentComponent;
  let fixture: ComponentFixture<CounterAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
