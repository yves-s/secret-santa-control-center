import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class StorageService {
  public localStorage:any;

  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public update(key:string, value:any) {
    const currentState = this.getObject(key);
    this.setObject(key, Object.assign({}, currentState, value));
  }

  public set(key:string, value:string) {
    this.localStorage[key] = value;
  }

/*  public get(key:string):Observable<any> {
    return this.localStorage[key].asObservable;
  }*/

  public get(key:string): any {
    return this.localStorage[key];
  }

/*  public setObject(key:string, value:any): Observable<any> {
    this.localStorage[key] = JSON.stringify(value);
    return this.localStorage[key].asObservable()
  }*/

  public setObject(key:string, value:any) {
    this.localStorage[key] = JSON.stringify(value);
  }

/*  public getObject(key:string): Observable<any> {
    return JSON.parse(this.localStorage[key] || '{}').asObservable;
  }*/

  public getObject(key:string): any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key:string): any {
    this.localStorage.removeItem(key);
  }
}
