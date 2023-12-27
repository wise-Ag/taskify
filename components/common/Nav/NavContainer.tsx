import Crown from "@/assets/icons/crown.svg";
import SettingButton from "@/components/common/Nav/DashboardButtons";
import Profile from "@/components/common/Nav/Profile";
import ProfileImages from "@/components/common/Nav/ProfileImages";
import { profileData } from "@/components/common/Nav/mockData";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface NavContainerProps {
  title: string;
  $isDashboard?: boolean;
  createdByMe?: boolean;
}

const NavContainer = ({ title, $isDashboard = false, createdByMe = false }: NavContainerProps) => {
  const { nickname, profileImageUrl } = profileData;

  return (
    <Wrapper>
      <Title>
        {title}
        {createdByMe && <Crown alt="왕관" width={20} height={16} />}
      </Title>
      <Content>
        {createdByMe && <SettingButton />}
        {$isDashboard && <ProfileImages />}
        <Line />
        <Profile profileImageUrl={profileImageUrl} nickname={nickname} />
      </Content>
    </Wrapper>
  );
};

export default NavContainer;

const Wrapper = styled.div`
  height: 7rem;

  padding: 2.3rem 8rem 2.3rem 34rem;
  border-bottom: 1px solid var(--Grayd9);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  background-color: var(--MainBG);

  @media (max-width: ${DeviceSize.pc}) {
    gap: 3rem;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    padding: 1.6rem 4rem 1.6rem 20rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 6rem;

    padding: 1.3rem 1.2rem 1.3rem 9.1rem;
  }
`;

const Title = styled.div`
  color: var(--Black33);
  font-size: 2rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  @media (max-width: ${DeviceSize.pc}) {
    gap: 2rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    gap: 1.6rem;
  }
`;

const Line = styled.div`
  border-left: 1px solid var(--Grayd9);
  height: 3.8rem;
`;
