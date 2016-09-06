import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'secret-santa',
  templateUrl: 'secret-santa.component.html',
  styleUrls: ['secret-santa.component.css']
})
export class SecretSanta implements OnInit {
  @Input() secretSanta = {};

  constructor() { }

  ngOnInit() {}
}
