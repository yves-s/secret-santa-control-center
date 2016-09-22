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
    // return this.storageService.setObject('secretSanta', secretSanta)
    //   .do((savedSecretSanta) => this.storeHelper.add('secretSantas', secretSanta));
    this.storageService.update('secretSanta', secretSanta);
    this.storeHelper.add('secretSantas', secretSanta)
  }

  getSecretSantas() {
    /*
    *   ToDo: Add local fetching
    * */
    this.storageService.getObject('secretSanta')
      .do((secretSantas) => this.storeHelper.update('secretSantas', secretSantas));
  }

  deleteSecretSanta(secretSanta: SecretSanta) {
    this.storageService.setObject('secretSanta', secretSanta);
    this.storeHelper.findAndDelete('secretSantas', secretSanta.id);
  }
}
