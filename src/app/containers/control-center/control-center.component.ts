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
    this.store.changes.pluck('secretSantas')
      .subscribe((secretSantas: any) => {
        console.log('changes', secretSantas);
        this.secretSantas = secretSantas
      });
    this.secretSantas = this.secretSantaService.getSecretSantas();
  }

  onCreateSecretSanta(secretSanta: SecretSanta) {
    this.secretSantaService.createSecretSanta(secretSanta);
  }

  onRemoveSecretSanta(secretSanta: SecretSanta) {
    console.log('ControlCenter::onRemoveSecretSanta', secretSanta);
    this.secretSantaService.deleteSecretSanta(secretSanta);
  }
}
