import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAgentTestComponent } from './counter-agent-test.component';

describe('CounterAgentTestComponent', () => {
  let component: CounterAgentTestComponent;
  let fixture: ComponentFixture<CounterAgentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAgentTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAgentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
