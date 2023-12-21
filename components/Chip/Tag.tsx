import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

interface TagProps {
  bgColor: string;
  textColor: string;
}

function Tag({ bgColor, textColor, children }: TagProps & { children: React.ReactNode }) {
  return (
    <Container bgColor={bgColor} textColor={textColor}>
      {children}
    </Container>
  );
}

const Container = styled.span<TagProps>`
  padding: 0.4rem 0.6rem;
  gap: 1rem;
  border-radius: 4px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => `var(${props.bgColor})`};

  color: ${(props) => `var(${props.textColor})`};
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

export default Tag;
