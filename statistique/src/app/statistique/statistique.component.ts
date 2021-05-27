import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  @Input() public uneStatistique!: Statistique;
  @Output() public demandeSuppression: EventEmitter<void>;

  constructor() {
    this.demandeSuppression = new EventEmitter();
  }

  ngOnInit(): void {}

  traiterClicSupprimer() {
    this.demandeSuppression.emit();
  }
}
