import { TestBed } from '@angular/core/testing';

import { ElementDataService } from './element-data.service';

describe('ElementDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementDataService = TestBed.get(ElementDataService);
    expect(service).toBeTruthy();
  });
});
