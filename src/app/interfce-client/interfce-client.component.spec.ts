import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfceClientComponent } from './interfce-client.component';

describe('InterfceClientComponent', () => {
  let component: InterfceClientComponent;
  let fixture: ComponentFixture<InterfceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfceClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
