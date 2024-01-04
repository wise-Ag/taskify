import LogoButton from "@/components/common/Buttons/LogoButton";
import Profile from "@/components/common/Nav/Profile";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import styled from "styled-components";

const SettingNav = () => {
  return (
    <Wrapper>
      <LogoButtonContainer>
        <LogoButton />
      </LogoButtonContainer>
      <ContentContainer>
        <Title>계정관리</Title>
        <Content>
          <Line />
          <Profile />
        </Content>
      </ContentContainer>
    </Wrapper>
  );
};

export default SettingNav;

const Wrapper = styled.div`
  height: 7rem;

  padding: 2.3rem 8rem 2.3rem 34rem;
  border-bottom: 1px solid var(--Grayd9);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;

  background-color: var(--MainBG);

  z-index: ${Z_INDEX.Navigation};

  @media (max-width: ${DeviceSize.pc}) {
    gap: 3rem;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    padding: 1.6rem 4rem 1.6rem 20rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 6rem;

    padding: 1.3rem 1.2rem;
  }
`;

const LogoButtonContainer = styled.div`
  display: none;

  @media (max-width: ${DeviceSize.mobile}) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
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
