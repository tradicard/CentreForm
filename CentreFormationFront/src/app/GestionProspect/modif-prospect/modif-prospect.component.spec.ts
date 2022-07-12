import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProspectComponent } from './modif-prospect.component';

describe('ModifProspectComponent', () => {
  let component: ModifProspectComponent;
  let fixture: ComponentFixture<ModifProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
