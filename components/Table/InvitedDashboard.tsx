import { getInvitations, putInvitations } from "@/api/invitations";
import { Invitation } from "@/api/invitations/invitations.types";
import NoInvitation from "@/components/Table/NoInvite";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { invitationsAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PAGE_SIZE = 6;

const InvitedDashboard = () => {
  const tableTitles = ["이름", "초대자", "수락 여부"];
  const [invitations, setInvitations] = useAtom(invitationsAtom);
  const [invitationData, setInvitationData] = useState<Invitation[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);

  const loadInvitations = async () => {
    if (invitationData.length > 0 && cursorId == null) {
      return;
    }
    setIsLoading(true);
    const data = await getInvitations({
      cursorId,
      size: PAGE_SIZE,
      token: localStorage.getItem("accessToken"),
    });

    if (data && data.invitations) {
      setInvitationData((prev) => [...prev, ...data.invitations]);
      setInvitations(invitationData);
      setCursorId(data.cursorId);
      setIsLoading(false);
    }
  };

  const { targetRef, setIsLoading } = useInfiniteScroll({ callbackFunc: loadInvitations });

  useEffect(() => {
    loadInvitations();
  }, []);

  const handleInvitationResponse = async (invitationId: number, accept: boolean) => {
    const updatedInvitation = await putInvitations({
      invitationId,
      token: localStorage.getItem("accessToken"),
      inviteAccepted: accept,
    });
    if (updatedInvitation) {
      console.log("거절도 업데이트");
      // setCursorId(null);
      // setInvitationData(invitationData.splice(0, invitationData.length));
      // loadInvitations();
    }
  };

  return (
    <>
      {invitationData.length > 0 ? (
        <Container>
          <Title>초대받은 대시보드</Title>
          <Header>
            {tableTitles.map((title) => (
              <TableTitle key={title}>{title}</TableTitle>
            ))}
          </Header>
          {invitationData.map((invitation) => (
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
          <div ref={targetRef} />
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
  height: 60rem;
  padding: 3rem;
  border-radius: 8px;

  overflow: auto;

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
