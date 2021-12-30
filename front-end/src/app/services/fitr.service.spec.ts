import { TestBed } from '@angular/core/testing';

import { FitrService } from './fitr.service';

describe('FitrService', () => {
  let service: FitrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
