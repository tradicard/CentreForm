import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProspectComponent } from './single-prospect.component';

describe('SingleProspectComponent', () => {
  let component: SingleProspectComponent;
  let fixture: ComponentFixture<SingleProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
