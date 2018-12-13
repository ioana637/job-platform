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
}


export interface Ability {
  code: string;
  display: string;
  level: string;
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
}
