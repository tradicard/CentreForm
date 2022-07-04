import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleformationComponent } from './singleformation.component';

describe('SingleformationComponent', () => {
  let component: SingleformationComponent;
  let fixture: ComponentFixture<SingleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
