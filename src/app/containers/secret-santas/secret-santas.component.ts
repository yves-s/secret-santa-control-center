import { Component, OnInit } from '@angular/core';

export interface SecretSanta {
  name: string,
  email: string
}

@Component({
  selector: 'secret-santas',
  templateUrl: 'secret-santas.component.html',
  styleUrls: ['secret-santas.component.css']
})
export class SecretSantas implements OnInit {
  private secretSantas: Array<SecretSanta> = [
    {
      name: 'Mum',
      email: 'mum@mum.de'
    },
    {
      name: 'Yves',
      email: 'yves@yves.de'
    },
    {
      name: 'Marejke',
      email: 'marejke@marejke.de'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
