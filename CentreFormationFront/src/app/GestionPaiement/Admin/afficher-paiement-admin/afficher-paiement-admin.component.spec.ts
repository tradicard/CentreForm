import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPaiementAdminComponent } from './afficher-paiement-admin.component';

describe('AfficherPaiementAdminComponent', () => {
  let component: AfficherPaiementAdminComponent;
  let fixture: ComponentFixture<AfficherPaiementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPaiementAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherPaiementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
