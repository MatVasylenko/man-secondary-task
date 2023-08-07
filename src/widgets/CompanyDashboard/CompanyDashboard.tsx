import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/app/store';
import { selectCompanies } from 'src/entities/company/slices/companySlice';
import CompanyESGGrafic from 'src/entities/company/ui/CompanyESGGrafic';
import CompanyESGInfo from 'src/entities/company/ui/CompanyESGInfo';
import CompanyTitle from 'src/entities/company/ui/CompanyTitle';

const CompanyDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const companies = useAppSelector(selectCompanies);

  useEffect(() => {
    if (!searchParams.get('companyId')) {
      setSearchParams({
        companyId: String(companies[0].id),
      });
    }
  }, [searchParams, companies, setSearchParams])

  return (
    <div className="flex flex-col gap-4 w-full p-6 bg-gray-100">
      <CompanyTitle />
      <CompanyESGInfo />
      <CompanyESGGrafic />
    </div>
  )
};

export default CompanyDashboard;