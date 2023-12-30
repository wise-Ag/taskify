import MainLogo from "@/assets/icons/main-logo.svg";
import SignUpForm from "@/components/Sign/SignForm/SignUpForm";
import { useIsSignin } from "@/hooks/useIsSignin";
import Link from "next/link";
import styled from "styled-components";

const SignUpPage = () => {
  const { isSignin } = useIsSignin("/mydashboard");
  return (
    <>
      {isSignin || (
        <Container>
          <Link href="/">
            <MainLogo />
          </Link>
          <Greeting>첫 방문을 환영합니다!</Greeting>
          <SignUpFormWrapper>
            <SignUpForm />
          </SignUpFormWrapper>
          <CheckMembership>
            {"이미 가입하셨나요? "}
            <Link href="/signin">
              <GoToSignUp>로그인하기</GoToSignUp>
            </Link>
          </CheckMembership>
        </Container>
      )}{" "}
    </>
  );
};

export default SignUpPage;

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

const SignUpFormWrapper = styled.div`
  display: flex;
`;

const CheckMembership = styled.p`
  font-size: 1.6rem;
`;

const GoToSignUp = styled.span`
  color: var(--Main);
  text-decoration-line: underline;
`;
