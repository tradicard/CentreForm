import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrediterCompteComponent } from './crediter-compte.component';

describe('CrediterCompteComponent', () => {
  let component: CrediterCompteComponent;
  let fixture: ComponentFixture<CrediterCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrediterCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrediterCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
