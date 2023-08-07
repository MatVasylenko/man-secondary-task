import { ICompany } from './model';

export const calcTotalESG = (index: number, esg?: ICompany["esg"]) => {
  return esg ? Math.floor((
    esg.enviroment[index]
     + esg.goverment[index]
     + esg.social[index]
  ) / 3) : 0
}

export const calcLastPeriodTotalESG = (esg?: ICompany["esg"]) => {
  return esg ? Math.floor((
    esg.enviroment[esg.enviroment.length - 1]
     + esg.goverment[esg.goverment.length - 1]
     + esg.social[esg.social.length - 1]
  ) / 3) : 0
}
