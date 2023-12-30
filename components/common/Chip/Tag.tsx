import { TAG_COLOR } from "@/constants/ColorConstant";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

const Tag = ({ tag }: { tag: string }) => {
  const tagNum = tag?.charCodeAt(0) % 10;

  return (
    <Container $bgColor={TAG_COLOR[tagNum].bgColor} $textColor={TAG_COLOR[tagNum].textColor}>
      {tag}
    </Container>
  );
};

const Container = styled.span<{ $bgColor: string; $textColor: string }>`
  padding: 0.4rem 0.6rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 4px;
  background-color: ${(props) => props.$bgColor};

  color: ${(props) => props.$textColor};
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

export default Tag;
