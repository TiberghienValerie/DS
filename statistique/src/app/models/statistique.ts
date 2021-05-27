export type Appreciation = 'SUCCESS' | 'WARNING' | 'DANGER';

export class Statistique {
  constructor(
    public identifiant: string,
    public titre: string,
    public valeur: string,
    public appreciation: Appreciation
  ) {}
}
