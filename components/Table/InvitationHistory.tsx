import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import Button from "@/components/common/Buttons/Button";
import { useEffect, useState } from "react";
import { getInvitations } from "@/api/invitations/getInvitations";
import { getDashboardInvitations } from "@/api/dashboards/getDashboardInvitations";

type Invitation = {
  id: number;
  inviterUserId: number;
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
};

// interface InvitationsListProps {
//   invitations: Invitation[];
//   totalCount: number;
//   currentPage: number;
// }

const InvitationHistory = () => {
  const [invitations, setInvitations] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let totalPageNum = Math.floor(totalCount / 5) + 1; // 5개만 보여준다고 가정

  const fetchData = async () => {
    const { invitations, totalCount } = await getDashboardInvitations({
      dashboardId: "217",
      // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1ODY3NzAsImlzcyI6InNwLXRhc2tpZnkifQ.gQpRpLmwfbMt3pbCJvyw6KkqnhsMOQDWEXFCpGtQoz0",
    });

    setInvitations(invitations);
    setTotalCount(totalCount);
  };

  const handlePageChange = (increment: number) => {
    setCurrentPage((prevPage) => prevPage + increment);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Section1>
        <Title>초대 내역</Title>
        <Button type="invite" children="초대하기" />
      </Section1>
      <Section2>
        <EmailList>이메일</EmailList>
        <PageInfo>
          {totalPageNum} 페이지 중 {currentPage}
        </PageInfo>
        <ButtonInfo>
          <PageButton
            type="forwardAndBackward"
            /*Set isDisabled to true if totalPageNum is 1 */
            isDisabled={totalPageNum === 1}
            onClickForward={() => handlePageChange(1)}
            onClickBackward={() => handlePageChange(-1)}
          />
        </ButtonInfo>
      </Section2>
      {invitations.map((invitation: Invitation) => (
        <InvitationItem key={invitation.id}>
          <Email>{invitation.invitee.email}</Email>
          <Button type="delete" children="취소" />
        </InvitationItem>
      ))}
    </Container>
  );
};

export default InvitationHistory;

const Container = styled.div`
  width: 62rem;

  padding: 2.6rem 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background: var(--White);

  @media screen and (max-width: ${DeviceSize.tablet}) {
    width: 54.4rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 28.4rem;

    padding: 2.2rem 2rem;
  }
`;

const Section1 = styled.div`
  width: 100%;

  margin-bottom: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const Section2 = styled.div`
  width: 100%;

  margin-bottom: 0.9rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-bottom: 0.8rem;
  }
`;

const EmailList = styled.h3`
  color: var(--Gray9f);
  font-size: 1.6rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;

const PageInfo = styled.h3`
  margin-left: auto;
  margin-right: 2rem;

  color: var(--Black33);
  font-size: 1.4rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-right: 1rem;

    font-size: 1.2rem;
  }
`;

const ButtonInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PageButton = styled(ButtonSet)`
  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-left: auto;
  }
`;

const InvitationItem = styled.div`
  width: 62rem;

  padding: 1.6rem 2.8rem;

  border-bottom: 1px solid var(--Grayee);

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    width: 54.4rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 28.4rem;

    padding: 1.2rem 2rem;
  }
`;

const Email = styled.div`
  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
