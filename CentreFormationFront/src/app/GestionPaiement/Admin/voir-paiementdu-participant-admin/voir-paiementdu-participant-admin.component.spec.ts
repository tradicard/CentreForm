import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPaiementduParticipantAdminComponent } from './voir-paiementdu-participant-admin.component';

describe('VoirPaiementduParticipantAdminComponent', () => {
  let component: VoirPaiementduParticipantAdminComponent;
  let fixture: ComponentFixture<VoirPaiementduParticipantAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirPaiementduParticipantAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirPaiementduParticipantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
