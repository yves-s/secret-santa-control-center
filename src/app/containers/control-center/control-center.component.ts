import {Component, OnInit} from '@angular/core';
import {SecretSanta} from "../../interfaces";
import {SecretSantaService} from "../../services";

@Component({
  selector: 'control-center',
  templateUrl: 'control-center.component.html',
  styleUrls: ['control-center.component.scss']
})
export class ControlCenter implements OnInit {
  secretSantas: SecretSanta[] = [];

  constructor(
    private secretSantaService: SecretSantaService
  ) { }

  ngOnInit() {
    this.secretSantas = this.secretSantaService.getSecretSantas();
  }

  onCreateSecretSanta(secretSanta: SecretSanta) {
    this.secretSantas = this.secretSantaService.createSecretSanta(secretSanta);
    console.log('onCreateSecretSanta', this.secretSantas);
  }
}
