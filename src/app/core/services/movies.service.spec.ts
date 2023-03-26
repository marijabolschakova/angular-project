import { TestBed } from '@angular/core/testing';

import { tmdbService } from './tmdb.service';

describe('MoviesService', () => {
  let service: tmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
