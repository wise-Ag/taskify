import Link from "next/link";
import styled from "styled-components";
import MainLogo from "@/assets/icons/main-logo.svg";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Link href="/">
        <MainLogo />
      </Link>
      <Text>
        접근 권한이 없거나 존재하지 않는 페이지입니다.
        <br />
        다른 주소를 시도하거나 홈페이지로 돌아가세요.
      </Text>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  height: 100vh;

  padding-top: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--MainBG);
`;

const Text = styled.div`
  line-height: 4rem;

  font-size: 2rem;
  text-align: center;
`;
