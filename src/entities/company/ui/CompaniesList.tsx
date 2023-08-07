import { ChangeEvent, useState } from 'react';
import { useAppSelector } from 'src/app/store';
import { selectCompanies } from '../slices/companySlice';
import CompanyListItem from './CompanyListItem';
import { ICompany } from '../model';

// FE Search only because of it's mock data
const CompaniesList = () => {
  const companies = useAppSelector(selectCompanies);
  const [localSearchName, setLocalSearchName] = useState<ICompany["name"]>('');

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="font-medium text-lg">Companies</div>
      <div>
        <input
          className="border border-gray-200 px-2 py-2 rounded-lg focus:outline-gray-300"
          value={localSearchName}
          onChange={onSearch}
          placeholder="Enter company"
        />
      </div>
      {companies.filter((company) => (
        company.name.indexOf(localSearchName) !== -1
      )).map((company, idx) => (
        <CompanyListItem
          key={`company${idx}`}
          {...company}
        />
      ))}
    </div>
  )
};

export default CompaniesList;