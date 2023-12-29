import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SignButton = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("accessToken") && setIsSignIn(true);
  });

  return (
    <Wrapper>
      {isSignIn ? (
        <Button
          href="/"
          onClick={() => {
            localStorage.removeItem("accessToken");
            setIsSignIn(false);
          }}
        >
          로그아웃
        </Button>
      ) : (
        <>
          <Button href="/signin">로그인</Button>
          <Button href="/signup">회원가입</Button>
        </>
      )}
    </Wrapper>
  );
};

export default SignButton;

const Wrapper = styled.div`
  display: flex;
  gap: 3.6rem;

  @media (max-width: ${DeviceSize.mobile}) {
    gap: 2rem;
  }
`;

const Button = styled(Link)`
  color: var(--Black33);
  font-size: 1.4rem;
`;
