import {Component, OnInit, Input} from '@angular/core';
import {SecretSanta} from "../../interfaces";

@Component({
  selector: 'secret-santas',
  templateUrl: 'secret-santas.component.html',
  styleUrls: ['secret-santas.component.css']
})
export class SecretSantas implements OnInit {
  @Input() secretSantas: Array<SecretSanta> = [];

  constructor() { }

  ngOnInit() {}
}
