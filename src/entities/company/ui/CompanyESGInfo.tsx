import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/app/store';
import { selectCompanies } from '../slices/companySlice';
import { calcLastPeriodTotalESG } from './../lib';
import { twMerge } from 'tailwind-merge';

const CompanyESGInfoItem = ({
  className,
  title,
  value,
}: {
  title: string;
  value: number;
  className?: string;
}) => (
  <div className={twMerge(
    "flex flex-col gap-2 items-center border rounded-lg border-gray-200 w-[25%] py-2 px-1 bg-white",
    className,
  )}>
    <div className="text-green-800 text-2xl">{value}</div>
    <div className="text-gray-500 text-sm">{title}</div>
  </div>
)

const CompanyESGInfo = () => {
  const [searchParams] = useSearchParams();
  const companies = useAppSelector(selectCompanies);
  const company = companies.find((company) => company.id === Number(searchParams.get('companyId')));
  return (
    <div className="flex items-center gap-4">
      <CompanyESGInfoItem
        title="Enviroment Impact"
        value={company?.esg.enviroment[company?.esg.enviroment.length - 1] ?? 0}
      />
      <CompanyESGInfoItem
        title="Social Impact"
        value={company?.esg.social[company?.esg.social.length - 1] ?? 0}
      />
      <CompanyESGInfoItem
        title="Goverment Impact"
        value={company?.esg.goverment[company?.esg.goverment.length - 1] ?? 0}
      />
      <CompanyESGInfoItem
        className="font-bold"
        title="Total"
        value={calcLastPeriodTotalESG(company?.esg) ?? 0}
      />
    </div>
  )
};

export default CompanyESGInfo;