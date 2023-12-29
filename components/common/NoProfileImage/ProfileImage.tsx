import styled from "styled-components";

const PROFILE_COLOR = ["#A3C4A2", "#FDD446", "#76A5EA", "#0e465d", "#C4B1A2", "#ef823e", "#df8ec1", "#ea3835", "#701cb0", "#137549"];

interface NoProfileImageProps {
  id: number;
  nickname: string;
  isBorder?: boolean;
}
const NoProfileImage = ({ id, nickname, isBorder = false }: NoProfileImageProps) => {
  return (
    <Container $bgColor={PROFILE_COLOR[id % 10]} $isBorder={isBorder}>
      {nickname[0].toUpperCase()}
    </Container>
  );
};
export default NoProfileImage;

const Container = styled.div<{ $bgColor: string; $isBorder: Boolean }>`
  background-color: ${(props) => props.$bgColor};

  border-radius: 100%;

  border: ${(props) => (props.$isBorder ? "2px solid var(--White)" : "none")};

  text-align: center;
  color: var(--White);
  font-family: Montserrat;
  font-weight: 600;
`;
