import { DeviceSize } from "@/styles/DeviceSize";
import { ReactNode } from "react";
import styled from "styled-components";

interface TagProps {
  $bgColor: string;
  $textColor: string;
}

const Tag = ({ $bgColor, $textColor, children }: TagProps & { children: ReactNode }) => {
  return (
    <Container $bgColor={$bgColor} $textColor={$textColor}>
      {children}
    </Container>
  );
};

const Container = styled.span<TagProps>`
  padding: 0.4rem 0.6rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 4px;
  background: ${(props) => `var(${props.$bgColor})`};

  color: ${(props) => `var(${props.$textColor})`};
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

export default Tag;
