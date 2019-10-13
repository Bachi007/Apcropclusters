import { TestBed } from '@angular/core/testing';

import { AddcropService } from './addcrop.service';

describe('AddcropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcropService = TestBed.get(AddcropService);
    expect(service).toBeTruthy();
  });
});
