import { TestBed, inject } from '@angular/core/testing';

import { LocationService } from './location.service';

describe('AddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationService]
    });
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));
});
