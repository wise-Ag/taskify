import LogoButton from "@/components/common/Buttons/LogoButton";
import { selectedTabAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useAtom } from "jotai";
import Link from "next/link";
import styled from "styled-components";

const SettingSideMenu = () => {
  const [selectedTab, setSelectedTab] = useAtom(selectedTabAtom);

  return (
    <Wrapper>
      <LogoButtonContainer>
        <LogoButton />
      </LogoButtonContainer>
      <ButtonContainer>
        <StyledLink $selectedTab={selectedTab} onClick={() => setSelectedTab("profile")} href={{ pathname: "/mypage", query: { tab: "profile" } }}>
          프로필 설정
        </StyledLink>
        <StyledLink onClick={() => setSelectedTab("password")} href={{ pathname: "/mypage", query: { tab: "password" } }}>
          비밀번호 변경
        </StyledLink>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SettingSideMenu;

const Wrapper = styled.div`
  width: 30rem;
  height: 155rem;

  padding: 2rem 1.2rem;

  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;

  border-right: 1px solid var(--Grayd9);

  background-color: var(--MainBG);

  z-index: ${Z_INDEX.SettingSideMenu_Wrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    width: 16rem;
    height: 166.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: 5rem;

    padding: 0;

    border-bottom: 1px solid var(--Grayd9);

    flex-direction: row;

    top: 6.5rem;
  }
`;

const LogoButtonContainer = styled.div`
  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;

  margin-top: 6rem;
  margin-left: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-top: 4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin: 0;
    padding-left: 6.6rem;

    flex-direction: row;
    align-items: center;

    text-align: center;
  }
`;

const StyledLink = styled(Link)<{ $selectedTab: string }>`
  display: flex;

  font-size: 1.8rem;

  font-weight: ${({ $selectedTab }) => ($selectedTab === "profile" ? 700 : "normal")};
  color: ${({ $selectedTab }) => ($selectedTab === "profile" ? "var(--Main)" : "inherit")};

  &:focus {
    font-weight: 700;
    color: var(--Main);
  }

  @media (max-width: ${DeviceSize.tablet}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 5rem;

    align-items: center;

    border-bottom: ${({ $selectedTab }) => ($selectedTab === "profile" ? "2px solid var(--Main)" : "none")};

    font-size: 1.5rem;

    &:focus {
      border-bottom: 2px solid var(--Main);
      color: var(--Main);
    }
  }
`;
