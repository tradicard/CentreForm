import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParticipantFormationsComponent } from './single-participant-formations.component';

describe('SingleParticipantFormationsComponent', () => {
  let component: SingleParticipantFormationsComponent;
  let fixture: ComponentFixture<SingleParticipantFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleParticipantFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleParticipantFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
