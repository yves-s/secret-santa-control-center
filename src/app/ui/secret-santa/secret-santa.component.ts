import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'secret-santa',
  templateUrl: 'secret-santa.component.html',
  styleUrls: ['secret-santa.component.css']
})
export class SecretSanta implements OnInit {
  @Input() secretSanta = {};
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();

  public editing: boolean = false;
  public editButtonDesc: string = 'Edit';

  constructor() { }

  ngOnInit() {}

  onRemove() {
    this.remove.emit(this.secretSanta);
  }

  onEdit() {
    this.editButtonDesc = !this.editing ? 'Done' : 'Edit';

    if(this.editing) {
      this.edit.emit(this.secretSanta);
    }

    this.editing = !this.editing;
  }
}
