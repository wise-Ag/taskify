import CheckIcon from "@/assets/icons/check.svg";
import { useState } from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface ColorCircleProps {
  color: string;
  selected: boolean;
  onClick: () => void;
}

const DashBoardColor = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = ["--Green", "--Purple", "--Orange", "--Blue", "--Pink"];

  return (
    <Container>
      {colors.map((colorVar) => (
        <ColorCircle key={colorVar} color={colorVar} selected={selectedColor === `var(${colorVar})`} onClick={() => setSelectedColor(`var(${colorVar})`)}>
          {selectedColor === `var(${colorVar})` && <CheckIcon />}
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
  background-color: ${(props) => `var(${props.color})`};

  cursor: pointer;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
