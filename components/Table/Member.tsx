import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/ButtonSet/ButtonSet";
import Button from "@/components/button/Button";

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface MembersListProps {
  members: Member[];
  totalCount: number;
  currentPage: number;
}

function MembersList({ members, totalCount, currentPage }: MembersListProps) {
  return (
    <Container>
      <Header>
        <Title>구성원</Title>
        <PageInfo>
          <PageText>
            {totalCount} 페이지 중 {currentPage}
          </PageText>
          <ButtonSet type="forwardAndBackward" size="S" isDisabled={true}></ButtonSet>
        </PageInfo>
      </Header>
      <NameList>이름</NameList>
      {members.map((member) => (
        <MemberItem key={member.id}>
          <MemberInfo>
            <Profile src={member.profileImageUrl} alt={member.nickname} />
            <Name>{member.nickname}</Name>
          </MemberInfo>
          <Button type="delete" size="S" children="삭제" />
        </MemberItem>
      ))}
    </Container>
  );
}

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

const Header = styled.div`
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
  padding: 1.6rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--Grayee);

  &:last-child {
    border-bottom: 0;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    padding: 1.2rem 0;
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

export default MembersList;
