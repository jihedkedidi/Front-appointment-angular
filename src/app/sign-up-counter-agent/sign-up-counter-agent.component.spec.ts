import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCounterAgentComponent } from './sign-up-counter-agent.component';

describe('SignUpCounterAgentComponent', () => {
  let component: SignUpCounterAgentComponent;
  let fixture: ComponentFixture<SignUpCounterAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpCounterAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpCounterAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
