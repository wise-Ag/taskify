import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/ButtonSet/ButtonSet";
import Button from "@/components/Button/Button";

interface Invitation {
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
}

interface InvitationsListProps {
  invitations: Invitation[];
  totalCount: number;
  currentPage: number;
}

const InvitationHistory = ({ invitations, totalCount, currentPage }: InvitationsListProps) => {
  return (
    <Container>
      <Section1>
        <Title>초대 내역</Title>
        <Button type="invite" children="초대하기" />
      </Section1>
      <Section2>
        <EmailList>이메일</EmailList>
        <PageInfo>
          {totalCount} 페이지 중 {currentPage}
        </PageInfo>
        <ButtonInfo>
          <PageButton type="forwardAndBackward" isDisabled={true} />
        </ButtonInfo>
      </Section2>
      {invitations.map((invitation) => (
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

  padding: 2.5rem;

  border-radius: 8px;
  background: var(--White);

  @media screen and (max-width: ${DeviceSize.tablet}) {
    width: 54.4rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 28.4rem;

    padding: 2rem;
  }
`;

const Section1 = styled.div`
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
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--Grayee);

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: 0;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    padding: 1.2rem 0;
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
