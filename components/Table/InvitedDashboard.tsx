import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import NoInvitation from "@/components/Table/NoInvite";

interface Invitation {
  id: number;
  inviterUserId: number;
  teamId: string;
  dashboard: { title: string; id: number };
  invitee: { nickname: string; id: number };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface InvitationsListProps {
  invitations: Invitation[];
}

const InvitedDashboard = ({ invitations }: InvitationsListProps) => {
  const tableTitles = ["이름", "초대자", "수락 여부"];

  return (
    <>
      {invitations ? (
        <Container>
          <Title>초대받은 대시보드</Title>
          <Header>
            {tableTitles.map((title) => (
              <TableTitle key={title}>{title}</TableTitle>
            ))}
          </Header>
          {invitations.map((invitation) => (
            <InvitationItem key={invitation.id}>
              <Info>
                <MobileTableTitle>이름</MobileTableTitle>
                <TableBody>{invitation.dashboard.title}</TableBody>
              </Info>
              <Info>
                <MobileTableTitle>초대자</MobileTableTitle>
                <TableBody>{invitation.invitee.nickname}</TableBody>
              </Info>
              <Info>
                <ButtonSet type="acceptAndReject" />
              </Info>
            </InvitationItem>
          ))}
        </Container>
      ) : (
        <NoInvitation />
      )}
    </>
  );
};

export default InvitedDashboard;

const Container = styled.div`
  width: 102rem;

  padding: 3rem;
  border-radius: 8px;

  background: var(--White);

  @media screen and (max-width: ${DeviceSize.tablet}) {
    width: 50.4rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 26rem;

    padding: 1.6rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 2rem;

  font-size: 2.4rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const TableTitle = styled.h3`
  width: 33%;

  color: var(--Gray9f);
  font-size: 1.6rem;
  font-weight: 400;
`;

const InvitationItem = styled.div`
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--Grayee);

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: 0;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    padding: 1.2rem 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Info = styled.div`
  width: 33%;

  margin-top: 1rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
`;

const MobileTableTitle = styled.h3`
  display: none;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 30%;

    display: block;

    font-size: 1.4rem;
    color: var(--Gray9f);
    font-weight: 400;
  }
`;

const TableBody = styled.h3`
  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 70%;

    font-size: 1.4rem;
  }
`;
