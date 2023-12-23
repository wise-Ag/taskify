import NavContainer from "@/components/Nav/NavContainer";
import { MydashboardData, NotMydashboardData } from "./mockData";

const DashboardNav = () => {
  const { title, createdByMe } = MydashboardData;
  // const { title, createdByMe } = NotMydashboardData;

  return <NavContainer title={title} $isDashboard createdByMe={createdByMe} />;
};

export default DashboardNav;
