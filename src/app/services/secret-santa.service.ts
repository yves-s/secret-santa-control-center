import {Injectable, OnInit} from '@angular/core';
import {SecretSanta} from "../interfaces/secret-santa.interface";
import {StoreHelper} from "./store-helper.service";
import {StorageService} from "./storage.service";

const KEY_SECRET_SANTAS = 'secretSantas';

@Injectable()
export class SecretSantaService {
  constructor(
    private storeHelper: StoreHelper,
    private storageService: StorageService
  ) { }

  createSecretSanta(secretSanta) {
    /*
    *   ToDo: Save secret santas to local storage
    *   With that we can save the users secret-santas
    *   in case of page-reload
    * */
    this.storeHelper.add(KEY_SECRET_SANTAS, secretSanta);
    return this.storageService.update(KEY_SECRET_SANTAS, secretSanta);
  }

  getSecretSantas() {
    /*
    *   ToDo: Add local fetching
    * */
    let secretSantas = this.storageService.getObject(KEY_SECRET_SANTAS);
    this.storeHelper.update(KEY_SECRET_SANTAS, secretSantas);
    return secretSantas;
  }

  deleteSecretSanta(secretSanta: SecretSanta) {
    this.storageService.findAndDelete(KEY_SECRET_SANTAS, secretSanta);
    this.storeHelper.findAndDelete(KEY_SECRET_SANTAS, secretSanta);
  }

  updateSecretSanta(secretSanta: SecretSanta) {
    this.storageService.findAndUpdate(KEY_SECRET_SANTAS, secretSanta);
    this.storeHelper.findAndUpdate(KEY_SECRET_SANTAS, secretSanta);
  }
}
