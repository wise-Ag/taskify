import { styled } from "styled-components";
import Columns from "@/components/Dashboard/Column/Columns";
import SideMenu from "@/components/common/SideMenu/SideMenu";
import DashboardNav from "@/components/common/Nav/DashboardNav";

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
