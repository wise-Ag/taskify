import { styled } from "styled-components";
import Columns from "@/components/Dashboard/Column/Columns";
import DashboardNav from "@/components/common/Nav/DashboradNav";
import SideMenu from "@/components/common/SideMenu/SideMenu";

const DashBoardPage = () => {
  return (
    <div>
      <DashboardNav />
      <Columns />
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
    </div>
  );
};

export default DashBoardPage;

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
`;
