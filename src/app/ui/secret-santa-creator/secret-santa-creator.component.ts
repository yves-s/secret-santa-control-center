import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SecretSanta} from "../../interfaces";
import {Store} from "../../store";

@Component({
  selector: 'secret-santa-creator',
  templateUrl: 'secret-santa-creator.component.html',
  styleUrls: ['secret-santa-creator.component.scss']
})
export class SecretSantaCreator implements OnInit {
  @Output() createSecretSanta = new EventEmitter();

  private secretSantasLength = 0;
  public newSecretSanta: SecretSanta = {
    id: '',
    name: '',
    email: ''
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.changes.pluck('secretSantas')
      .subscribe((secretSantas: any) => {
        this.secretSantasLength = secretSantas.length;
      });
  }

  onCreateSecretSanta() {
    this.newSecretSanta.id = this.secretSantasLength + 1;

    const {id, name, email} = this.newSecretSanta;

    if(name && email) {
      this.createSecretSanta.emit({id, name, email});
      this.reset();
    }
  }

  reset() {
    this.newSecretSanta = {
      name: '',
      email: ''
    }
  }

}
