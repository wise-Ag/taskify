import { deleteMembers, getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import AlertModal from "@/components/Modal/AlertModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { useModal } from "@/hooks/useModal";
import { usePagination } from "@/hooks/usePagination";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NoProfileImage from "@/components/common/NoProfileImage/ProfileImage";
import { getUsers } from "@/api/users";
import { UserData } from "@/api/users/users.types";

const PAGE_SIZE = 4;

const MembersList = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [selectedMemberId, setSelectedMemberId] = useState(0);
  const { handlePageChange, currentPage } = usePagination(totalPageNum);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const router = useRouter();
  const { boardid } = router.query;

  const fetchData = async () => {
    if (!isNaN(Number(boardid))) {
      const result = await getMembers({
        dashboardId: Number(boardid),
        token: localStorage.getItem("accessToken"),
        size: PAGE_SIZE,
        page: currentPage,
      });

      if (result !== null) {
        const { members, totalCount } = result;
        setMembers(members);
        setTotalCount(totalCount);
        setTotalPageNum(Math.ceil(totalCount / PAGE_SIZE)); // 페이지 수 업데이트
      }
    }
  };

  const handleOnCancel = async (memberId: number) => {
    await deleteMembers({ memberId: memberId, token: localStorage.getItem("accessToken") });

    setMembers([...members.filter((v) => v.id !== memberId)]);
    closeModalFunc();
  };

  const handleDeleteButtonClick = (memberId: number) => {
    setSelectedMemberId(memberId);
    openModalFunc();
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, boardid]);

  return (
    <>
      <Container>
        <Header>
          <Title>구성원</Title>
          <PageInfo>
            <PageText>
              {totalPageNum} 페이지 중 {currentPage}
            </PageText>
            <ButtonSet
              type="forwardAndBackward"
              // 페이지수가 1이면 button disabled로 설정
              isLeftDisabled={totalPageNum === 1}
              isRightDisabled={totalPageNum === 1}
              onClickRight={() => handlePageChange(1)}
              onClickLeft={() => handlePageChange(-1)}
            />
          </PageInfo>
        </Header>
        <NameList>{totalCount === 0 ? "멤버가 없습니다" : "이름"}</NameList>
        {members.map((member) => (
          <MemberItem key={member.id}>
            <MemberInfo>
              {member.profileImageUrl ? (
                <Profile $url={member.profileImageUrl} />
              ) : (
                <NoProfileImageWrapper>
                  <NoProfileImage id={member.userId} nickname={member.nickname} />
                </NoProfileImageWrapper>
              )}
              <Name>{member.nickname}</Name>
            </MemberInfo>
            {!member.isOwner && <Button type="delete" children="삭제" onClick={() => handleDeleteButtonClick(member.id)} />}
          </MemberItem>
        ))}
      </Container>

      {isModalOpen && (
        <ModalWrapper>
          <AlertModal type="confirm" onCancel={closeModalFunc} onConfirm={() => handleOnCancel(selectedMemberId)} />
        </ModalWrapper>
      )}
    </>
  );
};

export default MembersList;

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

const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  flex-grow: 1;

  font-size: 2.4rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
`;

const PageText = styled.h3`
  margin-right: 1.6rem;

  color: var(--Black33);
  font-size: 1.4rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-right: 1.2rem;

    font-size: 1.2rem;
  }
`;

const NameList = styled.h3`
  width: 100%;

  margin-top: 3.2rem;
  margin-bottom: 0.8rem;

  color: var(--Gray9f);
  font-size: 1.6rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;

const MemberItem = styled.div`
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

const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Profile = styled.div<{ $url: string }>`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.2rem;

  border-radius: 50%;

  object-fit: cover;
  background-image: url(${(props) => props.$url});
  background-size: cover;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;

    margin-right: 0.8rem;
  }
`;
const NoProfileImageWrapper = styled.div`
  width: 3.8rem;

  line-height: 3.8rem;
  font-size: 1.5rem;

  margin-right: 1.2rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;

    line-height: 3.4rem;
    font-size: 1.3rem;

    margin-right: 0.8rem;
  }
`;
const Name = styled.div`
  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 400;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
