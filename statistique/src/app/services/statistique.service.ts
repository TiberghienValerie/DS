import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RetourApi } from '../models/retourApi';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  constructor(private http: HttpClient) {}
  private tabStatistiques: Statistique[] = [];
  private readonly API_URL = 'https://stats.naminilamy.fr/';

  getStatistiques(): Promise<RetourApi<Statistique[]>> {
    return this.http
      .get(this.API_URL)
      .toPromise()
      .then(
        (obj: any) => {
          this.tabStatistiques = [];
          for (let o of obj) {
            this.tabStatistiques.push(
              new Statistique(o.id, o.title, o.value, o.appreciation)
            );
          }
          return {
            statut: 'OK',
            data: this.tabStatistiques,
          };
        },
        () => {
          return { statut: 'KO' };
        }
      );
  }

  supprimerStatistique(idStatistique: string): Promise<RetourApi<void>> {
    return this.http
      .delete(this.API_URL + idStatistique)
      .toPromise()
      .then(
        () => {
          let position = this.tabStatistiques.findIndex(
            (s) => s.identifiant === idStatistique
          );
          if (position != -1) {
            this.tabStatistiques.splice(position, 1);
          }
          return { statut: 'OK' };
        },
        () => {
          return { statut: 'KO' };
        }
      );
  }
}
