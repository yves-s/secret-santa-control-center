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
    this.secretSantas = this.secretSantaService.getSecretSantas();
    this.store.changes.pluck('secretSantas').
      subscribe((secretSantas: any) => {
        console.log('ngOnInit', secretSantas);
      });
  }

  onCreateSecretSanta(secretSanta: SecretSanta) {
    this.secretSantas = this.secretSantaService.createSecretSanta(secretSanta);
    console.log('onCreateSecretSanta', this.secretSantas);
  }
}
