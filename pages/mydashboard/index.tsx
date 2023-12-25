import MyDashboardList from "@/components/MyDashboardList";
import MyDashboardNav from "@/components/Nav/MyDashboardNav";
import SideMenu from "@/components/SideMenu/SideMenu";
import { styled } from "styled-components";

const MyDashboard = () => {
  return (
    <>
      <MyDashboardNav />
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
      <Container>
        <MyDashboardList />
      </Container>
    </>
  );
};

export default MyDashboard;

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
`;

const Container = styled.div`
  margin-left: 30rem;

  padding: 4rem;
`;
