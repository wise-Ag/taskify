import styled from "styled-components";
import DashboardButtons from "./DashboardButtons";
import Profile from "./Profile";
import profileData from "@/utils/profileData";
import { DeviceSize } from "@/styles/DeviceSize";

interface Props {
  title: string;
}

function DashboardNav({ title }: Props) {
  const { nickname, profileImageUrl } = profileData;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <DashboardButtons />
        <Line />
        <Profile profileImageUrl={profileImageUrl} nickname={nickname} />
      </Content>
    </Wrapper>
  );
}

export default DashboardNav;

const Wrapper = styled.div`
  padding: 2.3rem 8rem 2.3rem 34rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--Gray30);

  @media (max-width: ${DeviceSize.tablet}) {
    padding: 1.5rem 4rem;
    justify-content: flex-end;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 1.5rem 1.2rem;
  }
`;

const Title = styled.div`
  color: var(--Black20);
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.tablet}) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: ${DeviceSize.tablet}) {
    gap: 3.2rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    gap: 1.6rem;
  }
`;

const Line = styled.div`
  border-left: 1px solid var(--Gray30);
  height: 3.8rem;
`;
