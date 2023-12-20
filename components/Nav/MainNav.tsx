import LogoButton from "@/components/common/LogoButton";
import SignButton from "@/components/Nav/SignButton";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

function MainNav() {
  return (
    <Wrapper>
      <LogoButton />
      <SignButton />
    </Wrapper>
  );
}

export default MainNav;

const Wrapper = styled.nav`
  width: 100%;
  height: 7rem;

  padding: 1.6rem 8rem 1.6rem 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DeviceSize.tablet}) {
    padding: 1.6rem 4rem 1.6rem 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 1.6rem 2.4rem;
  }
`;
