import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDiplomeComponent } from './afficher-diplome.component';

describe('AfficherDiplomeComponent', () => {
  let component: AfficherDiplomeComponent;
  let fixture: ComponentFixture<AfficherDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
