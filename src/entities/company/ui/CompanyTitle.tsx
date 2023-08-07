import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/app/store';
import { selectCompanies } from '../slices/companySlice';

const CompanyTitle = () => {
  const [searchParams] = useSearchParams();
  const companies = useAppSelector(selectCompanies);
  const company = companies.find((company) => company.id === Number(searchParams.get('companyId')));

  return (
    <div className="text-gray-800 text-2xl">
      Company: {company?.name}
    </div>
  )
};

export default CompanyTitle;