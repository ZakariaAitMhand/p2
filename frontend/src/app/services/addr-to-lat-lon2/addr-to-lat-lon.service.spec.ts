import { TestBed } from '@angular/core/testing';

import { AddrToLatLonService } from './addr-to-lat-lon.service';

describe('AddrToLatLonService', () => {
  let service: AddrToLatLonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddrToLatLonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
