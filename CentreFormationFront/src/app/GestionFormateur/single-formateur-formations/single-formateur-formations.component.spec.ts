import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormateurFormationsComponent } from './single-formateur-formations.component';

describe('SingleFormateurFormationsComponent', () => {
  let component: SingleFormateurFormationsComponent;
  let fixture: ComponentFixture<SingleFormateurFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFormateurFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFormateurFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
