import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAllComponent } from './acceuil-all.component';

describe('AcceuilAllComponent', () => {
  let component: AcceuilAllComponent;
  let fixture: ComponentFixture<AcceuilAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
