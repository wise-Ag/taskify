import Columns from "@/components/Dashboard/Column/Columns";
import { styled } from "styled-components";
import DashboardNav from "@/components/common/Nav/DashboardNav";
import SideMenu from "@/components/common/SideMenu/SideMenu";

const DashBoardPage = () => {
  return (
    <>
      <DashboardNav />
      <SideMenu />
      <ColumnWrapper>
        <Columns />
      </ColumnWrapper>
    </>
  );
};

export default DashBoardPage;

const ColumnWrapper = styled.div`
  width: 100%;
  overflow: scroll;

  background-color: var(--Grayfa);
`;
