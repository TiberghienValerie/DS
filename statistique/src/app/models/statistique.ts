export type Appreciation = 'SUCCESS' | 'WARNING' | 'ERROR';

export class Statistique {
  constructor(
    public identifiant: string,
    public titre: string,
    public valeur: string,
    public appreciation: Appreciation
  ) {}
}
