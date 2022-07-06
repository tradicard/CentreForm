import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierContactsComponent } from './modifier-contacts.component';

describe('ModifierContactsComponent', () => {
  let component: ModifierContactsComponent;
  let fixture: ComponentFixture<ModifierContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
