import { styled } from "styled-components";
import Columns from "@/components/Dashboard/Column/Columns";

import SideMenu from "@/components/common/SideMenu/SideMenu";
import DashboardNav from "@/components/common/Nav/DashboradNav";

const DashBoardPage = () => {
  return (
    <div>
      <DashboardNav />
      <Columns />
      {/* <SideMenuWrapper> */}
      <SideMenu />
      {/* </SideMenuWrapper> */}
    </div>
  );
};

export default DashBoardPage;

const SideMenuWrapper = styled.div`
  /* position: fixed; */
  top: 0;
`;
