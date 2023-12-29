import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import NoInvitation from "@/components/Table/NoInvite";
import { useEffect } from "react";
import { getInvitations } from "@/api/invitations";
import { putInvitations } from "@/api/invitations";
import { useAtom } from "jotai";
import { invitationsAtom } from "@/states/atoms";

const PAGE_SIZE = 10;

const InvitedDashboard = () => {
  const tableTitles = ["이름", "초대자", "수락 여부"];
  const [invitations, setInvitations] = useAtom(invitationsAtom);

  const loadInvitations = async () => {
    const data = await getInvitations({
      size: PAGE_SIZE,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJ0ZWFtSWQiOiIxLTA4IiwiaWF0IjoxNzAzNzQ4NDU5LCJpc3MiOiJzcC10YXNraWZ5In0.WYQWWikKqILh4vWyiDSCs0HDO-3TvKg7ci19-NUVexk",
    });
    if (data && data.invitations) {
      setInvitations(data.invitations);
    }
  };

  useEffect(() => {
    loadInvitations();
  }, []);

  const handleInvitationResponse = async (invitationId: number, accept: boolean) => {
    const updatedInvitation = await putInvitations({
      invitationId,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJ0ZWFtSWQiOiIxLTA4IiwiaWF0IjoxNzAzNzQ4NDU5LCJpc3MiOiJzcC10YXNraWZ5In0.WYQWWikKqILh4vWyiDSCs0HDO-3TvKg7ci19-NUVexk",
      inviteAccepted: accept,
    });
    if (updatedInvitation) {
      loadInvitations();
    }
  };

  return (
    <>
      {invitations.length > 0 ? (
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
                <ButtonSet
                  type="acceptAndReject"
                  onClickLeft={() => handleInvitationResponse(invitation.id, true)}
                  onClickRight={() => handleInvitationResponse(invitation.id, false)}
                />
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
