import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {SecretSanta} from "./interfaces/secret-santa.interface";

import 'rxjs/Rx';

export interface State {
  secretSantas: SecretSanta[]
}

const defaultState: State = {
  secretSantas: []
};
const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable()
    .distinctUntilChanged()
    .do(() => console.log('changes'));

  setState(state: State) {
    console.log('setState', state);
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}
