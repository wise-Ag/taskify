import { PROFILE_COLOR } from "@/constants/ColorConstant";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

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
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.$bgColor};

  border-radius: 100%;

  border: ${(props) => (props.$isBorder ? "2px solid var(--White)" : "none")};

  text-align: center;
  color: var(--White);
  font-family: Montserrat;
  font-weight: 600;
`;
