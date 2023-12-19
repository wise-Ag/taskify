import styled from "styled-components";
import CheckIcon from "@/assets/icons/check.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { selectedColorAtom } from "@/states/atoms";

interface ColorCircleProps {
  color: string;
  selected: boolean;
  onClick: () => void;
}

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useAtom(selectedColorAtom);

  const colors = ["--Green", "--Purple", "--Orange", "--Blue", "--Pink"];

  return (
    <Container>
      {colors.map((colorVar) => (
        <ColorCircle key={colorVar} color={colorVar} selected={selectedColor === `var(${colorVar})`} onClick={() => setSelectedColor(`var(${colorVar})`)} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

  &:after {
    width: 2.4rem;
    height: 2.4rem;

    display: ${(props) => (props.selected ? "block" : "none")};
    position: absolute;

    content: "";
    background-image: url(${CheckIcon.src});
    background-size: cover;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export default ColorSelector;
