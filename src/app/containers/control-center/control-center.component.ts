import {Component, OnInit} from '@angular/core';
import {SecretSanta} from "../../interfaces";
import {SecretSantaService} from "../../services";
import {Store} from "../../store";

@Component({
  selector: 'control-center',
  templateUrl: 'control-center.component.html',
  styleUrls: ['control-center.component.scss']
})
export class ControlCenter implements OnInit {
  secretSantas: SecretSanta[] = [];

  constructor(
    private secretSantaService: SecretSantaService,
    private store: Store
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.store.changes.pluck('notes').
    subscribe((secretSantas: any) => this.secretSantas = secretSantas);
  }

  onCreateSecretSanta(secretSanta: SecretSanta) {
    this.secretSantaService.createSecretSanta(secretSanta);
  }
}
