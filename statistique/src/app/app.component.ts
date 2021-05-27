import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tabStatistique: Statistique[] = [];

  constructor() {
    this.tabStatistique.push(
      new Statistique(
        'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
        'Démographique en France',
        '60M',
        'SUCCESS'
      ),
      new Statistique(
        'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47',
        'Démographique en Irlande',
        '25M',
        'SUCCESS'
      )
    );

    this.tabStatistique.push(
      new Statistique(
        'fa1f5f40-be3b-11eb-91ec-7f5875ecfb48',
        'Démographique au Luxemboug',
        '15M',
        'SUCCESS'
      )
    );
  }
}
