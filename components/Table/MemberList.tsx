import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import Button from "@/components/common/Buttons/Button";
import { useEffect, useState } from "react";
import { getMembers } from "@/api/members/getMembers";

type Member = {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
};

// interface MembersListProps {
//   members: Member[];
//   totalCount: number;
//   currentPage: number;
// }

const MembersList = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let totalPageNum = Math.floor(totalCount / 5) + 1; // 5개만 보여준다고 가정

  const fetchData = async () => {
    const { members, totalCount } = await getMembers({
      dashboardId: 217,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
    });

    setMembers(members);
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
      <Header>
        <Title>구성원</Title>
        <PageInfo>
          <PageText>
            {totalPageNum} 페이지 중 {currentPage}
          </PageText>
          <ButtonSet
            type="forwardAndBackward"
            /*Set isDisabled to true if totalPageNum is 1 */
            isDisabled={totalPageNum === 1}
            onClickForward={() => handlePageChange(1)}
            onClickBackward={() => handlePageChange(-1)}
          />
        </PageInfo>
      </Header>
      <NameList>이름</NameList>
      {members.map((member: Member) => (
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
