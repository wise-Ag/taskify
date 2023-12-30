import CheckIcon from "@/assets/icons/check.svg";
import { useState } from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import { DASHBOARD_COLOR } from "@/constants/ColorConstant";

interface ColorCircleProps {
  color: string;
  selected: boolean;
  onClick: () => void;
}

const DashBoardColor = () => {
  const [selectedColor, setSelectedColor] = useState(DASHBOARD_COLOR[0]);

  return (
    <Container>
      {DASHBOARD_COLOR.map((color) => (
        <ColorCircle key={color} color={color} selected={selectedColor === color} onClick={() => setSelectedColor(color)}>
          {selectedColor === color && <StyledCheckIcon />}
        </ColorCircle>
      ))}
    </Container>
  );
};

export default DashBoardColor;

const Container = styled.div`
  gap: 1rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ColorCircle = styled.div<ColorCircleProps>`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-radius: 50%;
  background-color: ${(props) => props.color};

  cursor: pointer;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  color: var(--White);
`;
