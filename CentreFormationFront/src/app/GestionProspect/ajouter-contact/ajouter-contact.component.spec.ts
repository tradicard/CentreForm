import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContactComponent } from './ajouter-contact.component';

describe('AjouterContactComponent', () => {
  let component: AjouterContactComponent;
  let fixture: ComponentFixture<AjouterContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
