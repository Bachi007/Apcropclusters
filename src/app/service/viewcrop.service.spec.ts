import { TestBed } from '@angular/core/testing';

import { ViewcropService } from './viewcrop.service';

describe('ViewcropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewcropService = TestBed.get(ViewcropService);
    expect(service).toBeTruthy();
  });
});
