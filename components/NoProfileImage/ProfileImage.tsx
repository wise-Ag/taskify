import styled from "styled-components";

const PROFILE_COLOR = ["#A3C4A2", "#FDD446", "#76A5EA", "#0e465d", "#C4B1A2", "#ef823e", "#df8ec1", "#ea3835", "#701cb0", "#137549"];

const NoProfileImage = () => {
  const ID = 22;
  const nickname = "신혜윤";

  return <Container bgColor={PROFILE_COLOR[ID % 10]}>{nickname[0].toUpperCase()}</Container>;
};
export default NoProfileImage;

const Container = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};

  border-radius: 4.4rem;

  text-align: center;
  color: var(--White, #fff);
  font-family: Montserrat;
  font-weight: 600;
`;
