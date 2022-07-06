import { TestBed } from '@angular/core/testing';

import { HistoriqueformateurService } from './historiqueformateur.service';

describe('HistoriqueformateurService', () => {
  let service: HistoriqueformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
