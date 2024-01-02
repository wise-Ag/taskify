import { getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import Button from "@/components/common/Buttons/Button";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { usePagination } from "@/hooks/usePagination";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PAGE_SIZE = 4; // 임의로 추가

const MembersList = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPageNum, setTotalPageNum] = useState(1);
  const { handlePageChange, currentPage } = usePagination(totalPageNum);
  const router = useRouter();
  const { boardid } = router.query;

  const fetchData = async () => {
    const result = await getMembers({
      dashboardId: Number(boardid),
      token: localStorage.getItem("accessToken"),
      size: PAGE_SIZE,
      page: currentPage,
    });
    if (result) {
      const { members, totalCount } = result;
      setMembers(members);
      setTotalCount(totalCount);
      setTotalPageNum(Math.ceil(totalCount / PAGE_SIZE)); // 페이지 수 업데이트
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, boardid]);

  return (
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
            isDisabled={totalPageNum === 1}
            onClickRight={() => handlePageChange(1)}
            onClickLeft={() => handlePageChange(-1)}
          />
        </PageInfo>
      </Header>
      <NameList>{totalCount === 0 ? "멤버가 없습니다" : "이름"}</NameList>
      {members.map((member) => (
        <MemberItem key={member.id}>
          <MemberInfo>
            <Profile src={member.profileImageUrl} alt={member.nickname} />
            <Name>{member.nickname}</Name>
          </MemberInfo>
          <Button type="delete" children="삭제" />
        </MemberItem>
      ))}
    </Container>
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

const Profile = styled.img`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.2rem;

  border-radius: 50%;

  object-fit: cover;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;

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
