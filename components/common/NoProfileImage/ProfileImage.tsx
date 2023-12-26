import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

const PROFILE_COLOR = ["#A3C4A2", "#FDD446", "#76A5EA", "#0e465d", "#C4B1A2", "#ef823e", "#df8ec1", "#ea3835", "#701cb0", "#137549"];

const NoProfileImage = () => {
  const ID = 22;
  const nickname = "신혜윤";

  return <Container $bgColor={PROFILE_COLOR[ID % 10]}>{nickname[0].toUpperCase()}</Container>;
};
export default NoProfileImage;

const Container = styled.div<{ $bgColor: string }>`
  width: 3.8rem;
  height: 3.8rem;

  background-color: ${(props) => props.$bgColor};

  border-radius: 100%;
  border: 2px solid var(--White);

  text-align: center;
  color: var(--White);
  font-family: Montserrat;
  font-weight: 600;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
