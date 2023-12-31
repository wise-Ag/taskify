import CheckIcon from "@/assets/icons/check.svg";
import { useState } from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import { DASHBOARD_COLOR } from "@/constants/ColorConstant";
import { HexColorPicker } from "react-colorful";
import { VscColorMode } from "react-icons/vsc";
import { dashboardColorAtom } from "@/states/atoms";
import { useAtom } from "jotai";

const DashBoardColor = () => {
  const [selectedColor, setSelectedColor] = useAtom(dashboardColorAtom);
  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      {DASHBOARD_COLOR.map((color) => (
        <ColorCircle key={color} color={color} onClick={() => setSelectedColor(color)}>
          {selectedColor === color && <StyledCheckIcon />}
        </ColorCircle>
      ))}
      <div style={{ position: "relative", width: "3rem", height: "3rem" }} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
        <ColorCircle color={`${selectedColor}`}>
          <StyledColorIcon />
        </ColorCircle>
        {isHover && <StyledColorPicker color={selectedColor} onChange={setSelectedColor} />}
      </div>
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

const ColorCircle = styled.div.attrs((props) => ({ style: { backgroundColor: props.color } }))`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-radius: 50%;

  cursor: pointer;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  color: var(--White);
`;

const StyledColorIcon = styled(VscColorMode)`
  color: var(--White);
  width: 3rem;
  height: 3rem;
`;

const StyledColorPicker = styled(HexColorPicker)`
  position: absolute;
  top: -3rem;
  left: 3rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    top: -2.8rem;
    left: 2.8rem;
  }
`;
