import CrownIcon from "@/assets/icons/crown.svg";
import SettingButton from "@/components/common/Nav/DashboardButtons";
import Profile from "@/components/common/Nav/Profile";
import ProfileImages from "@/components/common/Nav/ProfileImages";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface NavContainerProps {
  title: string;
  $isDashboard?: boolean;
  createdByMe?: boolean;
}

const NavContainer = ({ title, $isDashboard = false, createdByMe = false }: NavContainerProps) => {
  return (
    <Wrapper>
      <Title>
        {createdByMe && <StyledCrown alt="왕관" width={20} height={16} />}
        <TitleText>{title}</TitleText>
      </Title>
      <Content>
        {createdByMe && <SettingButton />}
        {$isDashboard && <ProfileImages />}
        <Line />
        <Profile />
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
    padding: 1.6rem 1.2rem 1.6rem 20rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 6rem;

    padding: 1.3rem 1rem 1.3rem 9.1rem;

    gap: 1rem;
  }
`;

const Title = styled.div`
  width: 20rem;

  color: var(--Black33);
  font-size: 2rem;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    text-overflow: clip;
    overflow: auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.8rem;
  }
`;

const TitleText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    text-overflow: clip;
    overflow: auto;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledCrown = styled(CrownIcon)`
  margin-right: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Line = styled.div`
  border-left: 1px solid var(--Grayd9);
  height: 3.8rem;
`;
