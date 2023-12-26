import LargeLogo from "@/assets/icons/large-logo.svg";
import SmallLogo from "@/assets/icons/small-logo.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import styled from "styled-components";

const LogoButton = () => {
  return (
    <StyledLink href="/">
      <StyledLargeLogo alt="로고 이미지" />
      <StyledSmallLogo alt="로고 이미지" />
    </StyledLink>
  );
};

export default LogoButton;

const StyledLink = styled(Link)`
  width: 100%;
  margin-left: 1.2rem;

  display: flex;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 0;

    justify-content: center;
  }
`;

const StyledLargeLogo = styled(LargeLogo)`
  width: 12.1rem;
  height: 3.9rem;

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledSmallLogo = styled(SmallLogo)`
  display: none;

  @media (max-width: ${DeviceSize.mobile}) {
    display: inline;

    width: 2.4rem;
    height: 2.7rem;
  }
`;
