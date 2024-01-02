import { deleteDashboardInvitations, getDashboardInvitations, postDashboardInvitations } from "@/api/dashboards";
import { Invitation } from "@/api/invitations/invitations.types";
import { getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import AlertModal from "@/components/Modal/AlertModal";
import ModalContainer, { FormData } from "@/components/Modal/ModalContainer";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { useModal } from "@/hooks/useModal";
import { usePagination } from "@/hooks/usePagination";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PAGE_SIZE = 5;

const InvitationHistory = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [selectedInvitationId, setSelectedInvitationId] = useState<number>(0);
  const { handlePageChange, currentPage } = usePagination(totalPageNum);
  const { isModalOpen: isInvitaionModalOpen, openModalFunc: openInvitationModalFunc, closeModalFunc: closeInvitationModalFunc } = useModal();
  const { isModalOpen: isAlertModalOpen, openModalFunc: openAlertModalFunc, closeModalFunc: closeAlertModalFunc } = useModal();
  const { isModalOpen: isCancelModalOpen, openModalFunc: openCancelModalFunc, closeModalFunc: closeCancelModalFunc } = useModal();
  const router = useRouter();
  const { boardid } = router.query;

  const isAlreadySent = (userToCheck: string) => {
    return invitations.some((invitaion) => invitaion.invitee.email === userToCheck);
  };

  const isUserExist = (userToCheck: string) => {
    return members.some((member) => member.email === userToCheck);
  };

  const rules = {
    required: "초대할 사람의 이메일을 입력해 주세요.",
    validate: (invitaion: string) => {
      if (isAlreadySent(invitaion)) return "이미 초대 요청을 보낸 유저입니다!";
      if (isUserExist(invitaion)) return "이미 초대된 유저입니다!";
    },
  };

  const getInvitedUsers = async () => {
    if (!isNaN(Number(boardid))) {
      const result = await getMembers({
        dashboardId: Number(boardid),
        token: localStorage.getItem("accessToken"),
        size: PAGE_SIZE,
        page: currentPage,
      });

      if (result !== null) {
        const { members } = result;
        setMembers(members);
      }
    }
  };

  const fetchData = async () => {
    if (!isNaN(Number(boardid))) {
      const result = await getDashboardInvitations({
        dashboardId: Number(boardid),
        token: localStorage.getItem("accessToken"),
        size: PAGE_SIZE,
        page: currentPage,
      });

      if (result !== null) {
        const { invitations, totalCount } = result;
        setInvitations(invitations);
        setTotalCount(totalCount);
        setTotalPageNum(Math.ceil(totalCount / PAGE_SIZE)); // 페이지 수 업데이트
      }
    }
  };

  const handleOnSubmit = async (data: FormData) => {
    const res = await postDashboardInvitations({ email: data.inputData, dashboardId: Number(boardid), token: localStorage.getItem("accessToken") });

    if (res === null) {
      openAlertModalFunc();
      return;
    }

    setInvitations([res, ...invitations]);

    closeInvitationModalFunc();
  };

  const handleOnCancel = async (invitationId: number) => {
    await deleteDashboardInvitations({ dashboardId: Number(boardid), invitationId: invitationId, token: localStorage.getItem("accessToken") });

    setInvitations([...invitations.filter((v) => v.id !== invitationId)]);
    closeCancelModalFunc();
  };

  const handleDeleteButtonClick = (invitationId: number) => {
    setSelectedInvitationId(invitationId); // 삭제할 초대의 id를 설정
    openCancelModalFunc(); // 모달 열기
  };

  useEffect(() => {
    getInvitedUsers();
    fetchData();
  }, [currentPage, boardid, isInvitaionModalOpen]);

  return (
    <>
      <Container>
        <Section1>
          <Title>초대 내역</Title>
          <Button type="invite" children="초대하기" onClick={openInvitationModalFunc} />
        </Section1>

        <Section2>
          {totalCount === 0 ? (
            "초대 내역이 존재하지 않습니다."
          ) : (
            <>
              <EmailList>이메일</EmailList>
              <PageInfo>
                {totalPageNum} 페이지 중 {currentPage}
              </PageInfo>
              <ButtonInfo>
                <PageButton
                  type="forwardAndBackward"
                  // 페이지수가 1이면 button disabled로 설정
                  isLeftDisabled={totalPageNum === 1}
                  isRightDisabled={totalPageNum === 1}
                  onClickRight={() => handlePageChange(1)}
                  onClickLeft={() => handlePageChange(-1)}
                />
              </ButtonInfo>
            </>
          )}
        </Section2>

        {invitations.map((invitation: Invitation) => (
          <InvitationItem key={invitation.id}>
            <Email>{invitation.invitee.email}</Email>
            <Button type="delete" children="취소" onClick={() => handleDeleteButtonClick(invitation.id)} />
          </InvitationItem>
        ))}
      </Container>

      {isInvitaionModalOpen && (
        <ModalWrapper>
          <ModalContainer title="초대하기" label="이메일" buttonType="초대" onClose={closeInvitationModalFunc} onSubmit={handleOnSubmit} rules={rules} />
        </ModalWrapper>
      )}

      {isAlertModalOpen && (
        <ModalWrapper>
          <AlertModal type="invalid" onClick={closeAlertModalFunc} />
        </ModalWrapper>
      )}

      {isCancelModalOpen && (
        <ModalWrapper>
          <AlertModal type="cancel" onCancel={closeCancelModalFunc} onConfirm={() => handleOnCancel(selectedInvitationId)} />
        </ModalWrapper>
      )}
    </>
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

  color: var(--Gray9f);
  font-size: 1.6rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-bottom: 0.8rem;

    font-size: 1.4rem;
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
