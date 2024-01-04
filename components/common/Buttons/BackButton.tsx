import styled from "styled-components";
import Arrow from "@/assets/icons/arrow-forward.svg";
import Link from "next/link";
import { DeviceSize } from "@/styles/DeviceSize";

const BackButton = ({ href }: { href: string }) => {
  return (
    <Wrapper href={href}>
      <StyledArrow />
      <Text>돌아가기</Text>
    </Wrapper>
  );
};

export default BackButton;

const Wrapper = styled(Link)`
  width: 10rem;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  margin-bottom: 1.2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 8rem;

    margin-bottom: 1rem;
  }
`;

const StyledArrow = styled(Arrow)`
  width: 2rem;
  height: 2rem;

  transform: scaleX(-1);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Text = styled.p`
  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
