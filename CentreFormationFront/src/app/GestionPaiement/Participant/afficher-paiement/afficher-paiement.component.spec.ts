import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPaiementComponent } from './afficher-paiement.component';

describe('AfficherPaiementComponent', () => {
  let component: AfficherPaiementComponent;
  let fixture: ComponentFixture<AfficherPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
