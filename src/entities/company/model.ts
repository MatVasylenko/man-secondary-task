export interface ICompany {
  id: number;
  name: string;
  esg: {
    enviroment: number[];
    social: number[];
    goverment: number[];
  };
  location: string;
}
