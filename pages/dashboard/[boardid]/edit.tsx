import EditDashboard from "@/components/Table/EditDashboard";
import InvitationHistory from "@/components/Table/InvitationHistory";
import MembersList from "@/components/Table/MemberList";
import BackButton from "@/components/common/Buttons/BackButton";
import Button from "@/components/common/Buttons/Button";
import DashboardNav from "@/components/common/Nav/DashboardNav";
import SideMenu from "@/components/common/SideMenu/SideMenu";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import styled from "styled-components";

const DashboardEditPage = () => {
  const router = useRouter();
  const { boardid } = router.query;

  return (
    <Wrapper>
      <DashboardNav />
      <SideMenu />
      <Container>
        <BackButton href={`/dashboard/${boardid}`} />
        <EditDashboard boardid={boardid} />
        <MembersList boardid={Number(boardid)} />
        <InvitationHistory boardid={boardid} />
        <StyledButton>
          <Button type="deleteDashboard">대시보드 삭제하기</Button>
        </StyledButton>
      </Container>
    </Wrapper>
  );
};

export default DashboardEditPage;

const Wrapper = styled.div`
  height: 145.3rem;

  background-color: var(--MainLight);
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-left: 32rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 18rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin-left: 8rem;
  }
`;

const StyledButton = styled.div`
  margin-top: 2.8rem;
`;
