import {Component, OnInit, Input} from '@angular/core';
import {SecretSantaService} from "../../services";

@Component({
  selector: 'secret-santa',
  templateUrl: 'secret-santa.component.html',
  styleUrls: ['secret-santa.component.css']
})
export class SecretSanta implements OnInit {
  @Input() secretSanta;

  public editing: boolean = false;
  public editButtonName: string = 'Edit';

  constructor(
    private secretSantaService: SecretSantaService
  ) { }

  ngOnInit() {}

  onRemove() {
    this.secretSantaService.deleteSecretSanta(this.secretSanta);
  }

  onEdit() {
    this.editButtonName = !this.editing ? 'Done' : 'Edit';

    if(this.editing) {
      this.secretSantaService.updateSecretSanta(this.secretSanta);
    }

    this.editing = !this.editing;
  }
}
