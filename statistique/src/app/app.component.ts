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
    /* Correction exercice 4 : L'affichage automatique de l'ajout d'une nouvelle statistique au bout de 5 seondes
     

    setTimeout(() => {
      this.tabStatistique.push(
        new Statistique(
          'fa1f5f40-be3b-11eb-91ec-7f5875ecfb48',
          'Démographique au Luxemboug',
          '15M',
          'SUCCESS'
        )
      );
    }, 5000);

   */

    this.serviceApi.getStatistiques().then((retourApi) => {
      if (retourApi.data) this.tabStatistique = retourApi.data;
    });
  }

  supprimerStatistique(Statistiques: Statistique) {
    this.serviceApi
      .supprimerStatistique(Statistiques.identifiant)
      .then((retourApi) => {
        if (retourApi.statut !== 'OK') {
          alert('Problème lors de la suppression');
        }
      });
  }
}
