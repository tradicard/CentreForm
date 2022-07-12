import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsAssociesComponent } from './participants-associes.component';

describe('ParticipantsAssociesComponent', () => {
  let component: ParticipantsAssociesComponent;
  let fixture: ComponentFixture<ParticipantsAssociesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsAssociesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantsAssociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
