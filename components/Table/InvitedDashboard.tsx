import { getInvitations, putInvitations } from "@/api/invitations";
import NoInvitation from "@/components/Table/NoInvite";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useInfiniteScrollNavigator } from "@/hooks/useInfiniteScrollNavigator";
import { invitationsAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { FaArrowUpWideShort } from "react-icons/fa6";
import styled from "styled-components";

const PAGE_SIZE = 6;

const InvitedDashboard = () => {
  const tableTitles = ["이름", "초대자", "수락 여부"];
  const [invitations, setInvitations] = useAtom(invitationsAtom);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const scrollContainerRef = useRef(null);
  const { startRef, endRef, handleScrollNavClick, isScrollingUp } = useInfiniteScrollNavigator(scrollContainerRef);

  const loadInvitations = async () => {
    if (invitations.length > 0 && cursorId == null) {
      return;
    }
    setIsLoading(true);
    const data = await getInvitations({
      cursorId,
      size: PAGE_SIZE,
      token: localStorage.getItem("accessToken"),
    });

    if (data && data.invitations) {
      setInvitations((prev) => [...prev, ...data.invitations]);
      setCursorId(data.cursorId);
      setIsLoading(false);
    }
  };

  const { targetRef, setIsLoading } = useInfiniteScroll({ callbackFunc: loadInvitations });

  const handleInvitationResponse = async (invitationId: number, accept: boolean) => {
    const updatedInvitation = await putInvitations({
      invitationId,
      token: localStorage.getItem("accessToken"),
      inviteAccepted: accept,
    });
    if (updatedInvitation) {
      setInvitations([...invitations.filter((v) => v.id !== invitationId)]);
    }
  };

  useEffect(() => {
    setInvitations([]);
    loadInvitations();
  }, []);

  return (
    <>
      {invitations.length > 0 ? (
        <Container ref={scrollContainerRef}>
          <Title ref={startRef}>초대받은 대시보드</Title>
          <Header>
            {tableTitles.map((title) => (
              <TableTitle key={title}>{title}</TableTitle>
            ))}
          </Header>
          {invitations.map((invitation) => (
            <InvitationItem key={invitation.id}>
              {cursorId === invitation.id && <div ref={targetRef} />}
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
          <div ref={endRef} />
          {PAGE_SIZE < invitations.length && (
            <ScrollNavigateButton onClick={() => handleScrollNavClick()}>
              <ScrollNavigateIcon $isScrollingUp={isScrollingUp} />
            </ScrollNavigateButton>
          )}
        </Container>
      ) : (
        <NoInvitation />
      )}
    </>
  );
};

export default InvitedDashboard;

const Container = styled.div`
  max-width: 102rem;
  height: 60rem;
  padding: 3rem;
  border-radius: 8px;

  position: relative;

  overflow: auto;

  background: var(--White);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    max-width: 40rem;

    padding: 2.4rem 1.6rem;
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

const ScrollNavigateButton = styled.div`
  position: sticky;
  bottom: 0;
  left: 100rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border-radius: 1.5rem;

  cursor: pointer;

  background-color: var(--MainHover);
`;

const ScrollNavigateIcon = styled(FaArrowUpWideShort)<{ $isScrollingUp: boolean }>`
  width: 2.5rem;
  height: 2.5rem;

  ${(props) => props.$isScrollingUp && " transform: scaleY(-1)"};

  fill: var(--Main);
`;
