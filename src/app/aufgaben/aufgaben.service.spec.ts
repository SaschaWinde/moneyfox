import { TestBed, inject } from '@angular/core/testing';

import { AufgabenService } from './aufgaben.service';

describe('AufgabenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AufgabenService]
    });
  });

  it('should be created', inject([AufgabenService], (service: AufgabenService) => {
    expect(service).toBeTruthy();
  }));
});
