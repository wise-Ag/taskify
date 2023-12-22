import LargeLogo from "@/assets/icons/large-logo.svg";
import SmallLogo from "@/assets/icons/small-logo.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import styled from "styled-components";

const LogoButton = () => {
  return (
    <Link href="/">
      <StyledLargeLogo alt="로고 이미지" />
      <StyledSmallLogo alt="로고 이미지" />
    </Link>
  );
};

export default LogoButton;

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
