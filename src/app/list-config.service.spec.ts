import { TestBed } from '@angular/core/testing';

import { ListConfigService } from './list-config.service';

describe('ListConfigService', () => {
  let service: ListConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
