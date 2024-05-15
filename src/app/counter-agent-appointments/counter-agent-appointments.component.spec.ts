import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAgentAppointmentsComponent } from './counter-agent-appointments.component';

describe('CounterAgentAppointmentsComponent', () => {
  let component: CounterAgentAppointmentsComponent;
  let fixture: ComponentFixture<CounterAgentAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAgentAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAgentAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
