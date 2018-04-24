import { TestBed, inject } from '@angular/core/testing';

import { TrabajosService } from './trabajos.service';

describe('TrabajosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrabajosService]
    });
  });

  it('should be created', inject([TrabajosService], (service: TrabajosService) => {
    expect(service).toBeTruthy();
  }));
});
