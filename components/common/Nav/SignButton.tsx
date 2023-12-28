import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import styled from "styled-components";

const SignButton = () => {
  return (
    <Wrapper>
      <Button href="/signin">로그인</Button>
      <Button href="/signup">회원가입</Button>
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
