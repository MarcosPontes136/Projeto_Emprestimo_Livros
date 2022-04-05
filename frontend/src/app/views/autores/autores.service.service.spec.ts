import { TestBed } from '@angular/core/testing';

import { AutorService } from './autores.service';

describe('Autores.ServiceService', () => {
  let service: AutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
