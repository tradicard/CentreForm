import { TestBed } from '@angular/core/testing';

import { HistoriqueparticipantService } from './historiqueparticipant.service';

describe('HistoriqueparticipantService', () => {
  let service: HistoriqueparticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueparticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
