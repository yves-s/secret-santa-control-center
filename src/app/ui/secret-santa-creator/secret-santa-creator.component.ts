import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'secret-santa-creator',
  templateUrl: 'secret-santa-creator.component.html',
  styleUrls: ['secret-santa-creator.component.scss']
})
export class SecretSantaCreator implements OnInit {
  @Output() createSecretSanta = new EventEmitter();
  newSecretSanta = {
    name: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onCreateSecretSanta() {
    const {name, email} = this.newSecretSanta;

    if(name && email) {
      this.createSecretSanta.emit({name, email});
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
