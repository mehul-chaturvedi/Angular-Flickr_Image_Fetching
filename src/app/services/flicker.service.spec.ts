import { TestBed } from '@angular/core/testing';

import { FlickerService } from './flicker.service';

describe('FlickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickerService = TestBed.get(FlickerService);
    expect(service).toBeTruthy();
  });
});
