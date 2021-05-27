import { Component, OnInit } from '@angular/core';
import { Appreciation } from '../models/statistique';
import { StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'app-form-statistique',
  templateUrl: './form-statistique.component.html',
  styleUrls: ['./form-statistique.component.css'],
})
export class FormStatistiqueComponent implements OnInit {
  public titre!: string;
  public valeur!: string;
  public appreciation!: Appreciation;

  constructor(public serviceApi: StatistiqueService) {
    this.reinitialiserForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.serviceApi
      .creerStatistique(this.titre, this.valeur, this.appreciation)
      .then(() => {
        this.reinitialiserForm();
      });
  }

  reinitialiserForm() {
    this.titre = '';
    this.valeur = '';
    this.appreciation = 'SUCCESS';
  }
}
