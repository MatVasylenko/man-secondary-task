import { ICompany } from '../model';
import { calcLastPeriodTotalESG } from '../lib';
import { useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const CompanyListItem = ({
  id,
  name,
  esg,
  location,
}: ICompany) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const totalESG = calcLastPeriodTotalESG(esg);
  const activeCompanyId = Number(searchParams.get("companyId"));

  const changeCompany = () => {
    setSearchParams({
      companyId: String(id),
    });
  };

  return (
    <div
      onClick={changeCompany}
      className={twMerge(
        "cursor-pointer text-gray-500 hover:bg-gray-100 min-w-[20%] border-b border-gray-200 p-2 rounded-lg",
        id === activeCompanyId && "bg-gray-100"
      )}
      >
      <div className="flex items-center gap-3">
        <div className="text-lg">{name}</div>
        <div className="text-2xl text-gray-800">{totalESG}</div>
      </div>
      <div className="flex gap-2">
        <div>Location:</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default CompanyListItem;