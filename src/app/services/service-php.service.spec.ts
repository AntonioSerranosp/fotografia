import { TestBed } from '@angular/core/testing';

import { ServicePhpService } from './service-php.service';

describe('ServicePhpService', () => {
  let service: ServicePhpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePhpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
