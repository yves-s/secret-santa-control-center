/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SecretSantaComponent } from './secret-santa.component';

describe('Component: SecretSanta', () => {
  it('should create an instance', () => {
    let component = new SecretSantaComponent();
    expect(component).toBeTruthy();
  });
});
