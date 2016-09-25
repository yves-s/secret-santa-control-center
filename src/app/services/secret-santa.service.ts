import {Injectable, OnInit} from '@angular/core';
import {SecretSanta} from "../interfaces/secret-santa.interface";
import {StoreHelper} from "./store-helper.service";
import {StorageService} from "./storage.service";

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
    this.storeHelper.add('secretSantas', secretSanta);
    return this.storageService.update('secretSantas', secretSanta);
  }

  getSecretSantas() {
    /*
    *   ToDo: Add local fetching
    * */
    let secretSantas = this.storageService.getObject('secretSantas');
    this.storeHelper.update('secretSantas', secretSantas);
    return secretSantas;
  }

  deleteSecretSanta(secretSanta: SecretSanta) {
    this.storageService.setObject('secretSantas', secretSanta);
    this.storeHelper.findAndDelete('secretSantas', secretSanta.id);
  }
}
