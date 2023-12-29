import LogoButton from "@/components/common/Buttons/LogoButton";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useRouter } from "next/router";
import styled from "styled-components";

const SettingSideMenu = () => {
  const router = useRouter();
  const { tab } = router.query;

  const handleClick = (query: string) => {
    router.push(`/mypage?tab=${query}`);
  };

  return (
    <Wrapper>
      <LogoButtonContainer>
        <LogoButton />
      </LogoButtonContainer>
      <ButtonContainer>
        <StyledButton onClick={() => handleClick("profile")} selected={tab === "profile" || !tab}>
          프로필 설정
        </StyledButton>
        <StyledButton onClick={() => handleClick("password")} selected={tab === "password"}>
          비밀번호 변경
        </StyledButton>
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

const StyledButton = styled.button<{ selected?: boolean }>`
  display: flex;

  font-size: 1.8rem;

  ${({ selected }) =>
    selected &&
    `
      font-weight: 700;
      color: var(--Main);
    `}

  @media (max-width: ${DeviceSize.tablet}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 5rem;

    align-items: center;

    font-size: 1.5rem;

    ${({ selected }) =>
      selected &&
      `
        border-bottom: 2px solid var(--Main);
    `}
  }
`;
