/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SecretSantaService } from './secret-santa.service';

describe('Service: SecretSanta', () => {
  beforeEach(() => {
    addProviders([SecretSantaService]);
  });

  it('should ...',
    inject([SecretSantaService],
      (service: SecretSantaService) => {
        expect(service).toBeTruthy();
      }));
});
