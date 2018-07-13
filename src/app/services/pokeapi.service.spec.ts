import { TestBed, inject } from '@angular/core/testing';

import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeapiService]
    });
  });

  it('should be created', inject([PokeapiService], (service: PokeapiService) => {
    expect(service).toBeTruthy();
  }));
});
