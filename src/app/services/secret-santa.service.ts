import {Injectable, OnInit} from '@angular/core';
import {SecretSanta} from "../interfaces/secret-santa.interface";
import {StoreHelper} from "./store-helper.service";

@Injectable()
export class SecretSantaService {
  constructor(
    private storeHelper: StoreHelper,
  ) { }

  createSecretSanta(secretSanta) {
    /*
    *   ToDo: Save secret santas to local storage
    *   With that we can save the users secret-santas
    *   in case of page-reload
    * */
    return this.storeHelper.add('secretSantas', secretSanta);
  }

  getSecretSantas() {
    /*
    *   ToDo: Add local fetching
    * */
  }

  deleteSecretSanta(secretSanta: SecretSanta) {
    return this.storeHelper.findAndDelete('secretSantas', secretSanta.id);
  }
}
