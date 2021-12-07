import { TestBed } from '@angular/core/testing';

import { MiniServiceService } from './mini-service.service';

describe('MiniServiceService', () => {
  let service: MiniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
