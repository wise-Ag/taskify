import NavContainer from "@/components/Nav/NavContainer";
import { dashboardData } from "./mockData";

const DashboardNav = () => {
  const { title, createdByMe } = dashboardData;

  return <NavContainer title={title} createdByMe={createdByMe} />;
};

export default DashboardNav;
