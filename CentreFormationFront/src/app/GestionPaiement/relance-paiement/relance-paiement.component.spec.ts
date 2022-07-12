import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelancePaiementComponent } from './relance-paiement.component';

describe('RelancePaiementComponent', () => {
  let component: RelancePaiementComponent;
  let fixture: ComponentFixture<RelancePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelancePaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelancePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
