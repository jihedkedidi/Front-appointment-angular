import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartstatusComponent } from './linechartstatus.component';

describe('LinechartstatusComponent', () => {
  let component: LinechartstatusComponent;
  let fixture: ComponentFixture<LinechartstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinechartstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinechartstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
