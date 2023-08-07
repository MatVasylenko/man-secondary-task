import CompaniesList from "src/entities/company/ui/CompaniesList";
import CompanyDashboard from "src/widgets/CompanyDashboard/CompanyDashboard";


const HomePage = () => {
  return (
    <div className="flex w-full">
      <CompaniesList />
      <CompanyDashboard />
    </div>
  )
};

export default HomePage;