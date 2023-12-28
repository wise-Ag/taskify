import LogoButton from "@/components/common/Buttons/LogoButton";
import SignButton from "@/components/common/Nav/SignButton";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

const MainNav = () => {
  return (
    <Wrapper>
      <LogoButton isMainNav />
      <SignButton />
    </Wrapper>
  );
};

export default MainNav;

const Wrapper = styled.nav`
  width: 100%;
  height: 7rem;

  padding: 1.6rem 8rem 1.6rem 1.6rem;

  border-bottom: 1px solid var(--Grayd9);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--MainBG);

  @media (max-width: ${DeviceSize.tablet}) {
    padding: 1.6rem 4rem 1.6rem 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 1.6rem 2.4rem;
  }
`;
