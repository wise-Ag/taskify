import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

const TAG_COLOR = [
  { bgColor: "#ffd3aa", textColor: "#d35405" },
  { bgColor: "#dcb4eb", textColor: "#9600fa" },
  { bgColor: "#e1fca1", textColor: "#129127" },
  { bgColor: "#f7dbf0", textColor: "#d549b6" },
  { bgColor: "#ffb7c5", textColor: "#c6172c" },
  { bgColor: "#99d39f", textColor: "#00791a" },
  { bgColor: "#a2b5ff", textColor: "#060078" },
  { bgColor: " #d7bb9e", textColor: "#332811" },
  { bgColor: "#fff8ae", textColor: "#ceb900" },
  { bgColor: "#cdf3ff", textColor: "#0c41e1" },
];

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
