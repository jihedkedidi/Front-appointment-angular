import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorInterfaceComponent } from './moderator-interface.component';

describe('ModeratorInterfaceComponent', () => {
  let component: ModeratorInterfaceComponent;
  let fixture: ComponentFixture<ModeratorInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
