import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifUtilisateurComponent } from './modif-utilisateur.component';

describe('ModifUtilisateurComponent', () => {
  let component: ModifUtilisateurComponent;
  let fixture: ComponentFixture<ModifUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
