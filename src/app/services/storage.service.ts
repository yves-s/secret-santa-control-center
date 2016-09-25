import {Injectable} from "@angular/core";
import {SecretSanta} from "../interfaces";

@Injectable()
export class StorageService {
  public localStorage:any;

  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public update(key:string, value:any): SecretSanta[] {
    const currentState = this.getObject(key);
    return this.setObject(key, [value, ...currentState]);
  }

  public set(key:string, value:string) {
    this.localStorage[key] = value;
  }

  public get(key:string): any {
    return this.localStorage[key];
  }

  public setObject(key:string, value:any): SecretSanta[] {
    this.localStorage[key] = JSON.stringify(value);
    return this.getObject(key);
  }

  public getObject(key:string): any {
    return JSON.parse(this.localStorage[key] || '[]');
  }

  public remove(key:string): any {
    this.localStorage.removeItem(key);
  }
}
