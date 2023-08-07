import { ICompany } from "./model";

export const MOCK_COMPANY_DATA:ICompany[] = [
  {
    id: 1,
    name: 'BMW',
    esg: {
      enviroment: [45, 55, 42, 23, 76, 65, 55, 43],
      social: [23, 43, 54, 35, 64, 87, 67, 90],
      goverment: [34, 56, 56, 55, 66, 77, 45, 78],
    },
    location: 'Germany',

  },
  {
    id: 2,
    name: 'Volvo',
    esg: {
      enviroment: [67, 54, 54, 77, 66, 56, 45, 67],
      social: [76, 65, 45, 23, 54, 76, 88, 67],
      goverment: [34, 54, 75, 89, 45, 43, 75, 89],
    },
    location: 'Germany',
  },
  {
    id: 3,
    name: 'Toyota',
    esg: {
      enviroment: [45, 34, 42, 23, 76, 65, 55, 43],
      social: [23, 43, 54, 54, 64, 87, 67, 43],
      goverment: [34, 56, 33, 55, 66, 77, 45, 78],
    },
    location: 'Japan',
  },
  {
    id: 4,
    name: 'Opel',
    esg: {
      enviroment: [67, 54, 54, 43, 66, 56, 45, 67],
      social: [76, 65, 44, 23, 67, 76, 23, 67],
      goverment: [34, 33, 78, 89, 45, 55, 75, 67],
    },
    location: 'Germany',
  },
];