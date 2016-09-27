/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SecretSantaCreator } from './secret-santa-creator.component';

describe('Component: SecretSantaInput', () => {
  it('should create an instance', () => {
    let component = new SecretSantaCreator();
    expect(component).toBeTruthy();
  });
});
