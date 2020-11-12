import { TestBed } from '@angular/core/testing';

import { FavoritesCharactersService } from './favorites-characters.service';

describe('FavoritesCharactersService', () => {
  let service: FavoritesCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
