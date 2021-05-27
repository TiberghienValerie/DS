import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './services/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tabStatistique: Statistique[] = [];

  constructor(public serviceApi: StatistiqueService) {
    this.serviceApi.getStatistiques().then((retourApi) => {
      if (retourApi.data) this.tabStatistique = retourApi.data;
    });
  }
}
