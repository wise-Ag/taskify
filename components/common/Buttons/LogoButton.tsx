import LargeLogo from "@/assets/icons/large-logo.svg";
import SmallLogo from "@/assets/icons/small-logo.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import styled from "styled-components";

const LogoButton = ({ isMainNav }: { isMainNav?: boolean }) => {
  return (
    <StyledLink href="/" $isMainNav={isMainNav}>
      <StyledLargeLogo alt="로고 이미지" />
      <StyledSmallLogo alt="로고 이미지" />
    </StyledLink>
  );
};

export default LogoButton;

const StyledLink = styled(Link)<{ $isMainNav?: boolean }>`
  width: 100%;
  margin-left: 1.2rem;

  display: flex;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 0;

    /* justify-content: center; */
    justify-content: ${(props) => (props.$isMainNav ? "flex-start" : "center")};
  }
`;

const StyledLargeLogo = styled(LargeLogo)`
  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledSmallLogo = styled(SmallLogo)`
  display: none;

  @media (max-width: ${DeviceSize.mobile}) {
    display: inline;
  }
`;
