import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import LogoButton from "@/components/common/LogoButton";
import Link from "next/link";

const SettingSideMenu = () => {
  return (
    <Wrapper>
      <LogoButton />
      <LinkContainer>
        {/* 페이지만들 때 수정 예정 */}
        <StyledLink href={"/"}>프로필 설정</StyledLink>
        <StyledLink href={"/"}>비밀번호 변경</StyledLink>
      </LinkContainer>
    </Wrapper>
  );
};

export default SettingSideMenu;

const Wrapper = styled.div`
  width: 30rem;
  height: 155rem;

  padding: 2rem 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  border-right: 1px solid var(--Grayd9);

  @media (max-width: ${DeviceSize.tablet}) {
    width: 16rem;
    height: 166.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 6.7rem;
    height: 185.9rem;
  }
`;

const LinkContainer = styled.div`
  width: 100%;

  margin-top: 3rem;
  margin-left: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-left: 0;

    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;

  &:focus {
    color: var(--Main);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
