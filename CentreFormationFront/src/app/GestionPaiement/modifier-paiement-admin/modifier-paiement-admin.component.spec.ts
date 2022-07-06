import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPaiementAdminComponent } from './modifier-paiement-admin.component';

describe('ModifierPaiementAdminComponent', () => {
  let component: ModifierPaiementAdminComponent;
  let fixture: ComponentFixture<ModifierPaiementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPaiementAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPaiementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
