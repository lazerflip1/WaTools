export interface Countries {
  name: string;
  label: string;
  code: number;
}

export const CountriesList: Countries[] = [
  {
    name: 'Spain',
    label: 'ES (+34)',
    code: 34
  },
  {
    name: 'France',
    label: 'FR (+33)',
    code: 33
  },
  {
    name: 'Portugal',
    label: 'PT (+351)',
    code: 351
  }
];
