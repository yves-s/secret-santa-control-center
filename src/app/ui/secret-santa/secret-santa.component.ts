import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'secret-santa',
  templateUrl: 'secret-santa.component.html',
  styleUrls: ['secret-santa.component.css']
})
export class SecretSanta implements OnInit {
  @Input() secretSanta = {};
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onRemove() {
    this.remove.emit(this.secretSanta);
  }
}
