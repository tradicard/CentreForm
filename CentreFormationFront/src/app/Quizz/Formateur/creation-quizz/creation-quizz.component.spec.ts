import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuizzComponent } from './creation-quizz.component';

describe('CreationQuizzComponent', () => {
  let component: CreationQuizzComponent;
  let fixture: ComponentFixture<CreationQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
