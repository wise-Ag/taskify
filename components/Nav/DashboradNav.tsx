import NavContainer from "./NavContainer";
import { dashboardData } from "./mockData";

function DashboardNav() {
  const { title, createdByMe } = dashboardData;

  return <NavContainer title={title} createdByMe={createdByMe} />;
}

export default DashboardNav;
