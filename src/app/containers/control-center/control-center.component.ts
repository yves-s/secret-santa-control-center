import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'control-center',
  templateUrl: 'control-center.component.html',
  styleUrls: ['control-center.component.scss']
})
export class ControlCenter implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCreateSecretSanta(secretSanta) {
    console.log('onCreateSecretSanta', secretSanta);
  }

}
