import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRendezVousComponent } from './user-rendez-vous.component';

describe('UserRendezVousComponent', () => {
  let component: UserRendezVousComponent;
  let fixture: ComponentFixture<UserRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRendezVousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
