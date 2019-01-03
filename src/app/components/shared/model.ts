export enum Category {
  Administratie = 'Administratie',
  Alimentatie = 'Alimentatie',
  Arta = 'Arta',
  Asigurari = 'Asigurari',
  Banci = 'Banci',
  Comert = 'Comert',
  Constructii = 'Constructii',
  Educatie = 'Educatie',
  Imobiliare = 'Imobiliare',
  It = 'IT',
  LemnPvc = 'Lemn si PVC',
  Masini = 'Masini',
  Media = 'Media',
  Sanatate = 'Sanatate',
  Aeronautica = 'Aeronautica',
  PazaProtectie = 'Paza si Protectie',
  Servicii = 'Servicii',
  PublicitateMarketing = 'Publicitate si Marketing',
  SportFrumusete = 'Sport si Frumusete',
  Logistica = 'Logistica',
  Turism = 'Turism',
  MarochinarieTextile = 'Marochinarie si Textile',
  Altele = 'Altele'
}

export interface User {
  username: string;
  password: string;
  role?: string;
  id?: string;
  firstName?: string;
  address?: string;
  birthDate?: string;
  city?: string;
  country?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  lastName?: string;
  phone?: string;
  postalCode?: string;
  starAvg?: string;
  subscribed?: boolean;
  twitter?: string;
  abilities?: Ability[];
}


export interface Ability {
  code: string;
  display: string;
  level: string;
  id?: string;
}


export interface Level {
  levelName: string;
}

export interface Job {
  id?: string;
  title: string;
  description: string;
  idClient?: number;
  periodStart: string;
  periodEnd: string;
  startTime: string;
  endTime: string;
  peopleRequired: number;
  status: string;
  abilities?: Ability[];
  hoursPerDay?: number;
  hoursPerWeek?: number;
  location: string;
  category: string;
}

export interface Recommendation {
  id?: string;
  recommender: number;
  /*se completeaza cu idul userului corespunzator*/
  recommendedProvider: number;
  /*se completeaza cu idul userului corespunzator*/
  userFor: number;
  /*se completeaza cu idul userului corespunzator*/
  description?: string;
  date: string;
}

export interface Review {
  id?: string;
  start?: string;
  idUser: number;
  userFor: User  ;
  job: Job  ;
  description: string;
  date: string;
}
