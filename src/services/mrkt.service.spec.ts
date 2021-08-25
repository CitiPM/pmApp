import { TestBed } from '@angular/core/testing';

import { MrktService } from './mrkt.service';

describe('MrktService', () => {
  let service: MrktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
