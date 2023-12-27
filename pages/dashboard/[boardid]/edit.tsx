import { getDashboard } from "@/api/dashboards/getDashboard";
import { getDashboardInvitations } from "@/api/dashboards/getDashboardInvitations";
import { postDashboard } from "@/api/dashboards/postDashboard";
import { postDashboardInvitations } from "@/api/dashboards/postDashboardInvitations";
import { getMembers } from "@/api/members/getMembers";
import EditDashboard from "@/components/Table/EditDashboard";
import InvitationHistory from "@/components/Table/InvitationHistory";
import MembersList from "@/components/Table/MemberList";
import BackButton from "@/components/common/Buttons/BackButton";
import Button from "@/components/common/Buttons/Button";
import DashboardNav from "@/components/common/Nav/DashboradNav";
import SideMenu from "@/components/common/SideMenu/SideMenu";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DashboardEditPage = () => {
  // useEffect(() => {
  //   const data = getDashboardInvitations({
  //     dashboardId: "217",
  //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
  //   });
  // }, []);
  const router = useRouter();
  const { boardid } = router.query;

  return (
    <Wrapper>
      <DashboardNav />
      <SideMenu />
      <Container>
        <BackButton href={`/dashboard/${boardid}`} />
        <EditDashboard />
        <MembersList />
        <InvitationHistory />
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
