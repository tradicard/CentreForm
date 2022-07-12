import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherQuizzComponent } from './afficher-quizz.component';

describe('AfficherQuizzComponent', () => {
  let component: AfficherQuizzComponent;
  let fixture: ComponentFixture<AfficherQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
