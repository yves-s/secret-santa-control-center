import { Component, OnInit } from '@angular/core';
import {SecretSanta} from "../../interfaces";

@Component({
  selector: 'control-center',
  templateUrl: 'control-center.component.html',
  styleUrls: ['control-center.component.scss']
})
export class ControlCenter implements OnInit {
  private secretSantas: Array<SecretSanta> = [];

  constructor() { }

  ngOnInit() {
  }

  onCreateSecretSanta(secretSanta: SecretSanta) {
    this.secretSantas.push(secretSanta);
  }
}
