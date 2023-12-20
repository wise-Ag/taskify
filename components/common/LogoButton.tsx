import LargeLogo from "@/assets/icons/large-logo.svg";
import SmallLogo from "@/assets/icons/small-logo.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import styled from "styled-components";

function LogoButton() {
  return (
    <Link href="/">
      <StyledLargeLogo alt="로고 이미지" />
      <StyledSmallLogo alt="로고 이미지" />
    </Link>
  );
}

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

// 이 코드에서 The resource http://localhost:3000/_next/static/media/large-logo.a25645d8.svg was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. 이런 경고메시지가 뜨는데 해결 방법을 모르겠습니다ㅠㅠ
