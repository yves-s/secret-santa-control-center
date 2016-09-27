import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SecretSanta} from "../../interfaces";

@Component({
  selector: 'secret-santas',
  templateUrl: 'secret-santas.component.html',
  styleUrls: ['secret-santas.component.css']
})
export class SecretSantas implements OnInit {
  @Input() secretSantas: Array<SecretSanta> = [];
  @Output() removeSecretSanta = new EventEmitter();
  @Output() editSecretSanta = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onRemoveSecretSanta(secretSanta: SecretSanta) {
    this.removeSecretSanta.emit(secretSanta);
  }

  onEditSecretSanta(secretSanta: SecretSanta) {
    this.editSecretSanta.emit(secretSanta);
  }
}
