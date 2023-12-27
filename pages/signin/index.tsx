import MainLogo from "@/assets/icons/main-logo.svg";
import SignInForm from "@/components/Sign/SignForm/SignInForm";
import Button from "@/components/common/Buttons/Button";
import Link from "next/link";
import styled from "styled-components";

const SignInPage = () => {
  return (
    <Container>
      <Link href="/">
        <MainLogo />
      </Link>
      <Greeting>오늘도 만나서 반가워요!</Greeting>
      <SignInForm />
      <ButtonWrapper>
        <Button type="login">로그인</Button>
      </ButtonWrapper>
      <CheckMembership>
        {"회원이 아니신가요? "}
        <Link href="/signup">
          <GoToSignUp>회원가입하기</GoToSignUp>
        </Link>
      </CheckMembership>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  padding-top: 18rem;
  padding-bottom: 22rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--MainLight);
`;

const Greeting = styled.p`
  margin-top: 1rem;
  margin-bottom: 3.8rem;

  font-size: 2rem;
  font-weight: 500;
  color: var(--Black33);
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.4rem;
`;

const CheckMembership = styled.p`
  font-size: 1.6rem;
`;

const GoToSignUp = styled.span`
  color: var(--Main);
  text-decoration-line: underline;
`;
