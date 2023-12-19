import React from "react";
import styled from "styled-components";
import { TYPES, StyledSpan } from "./ButtonStyles";
import Image from "next/image";
import addBoxIcon from "../../assets/icons/add-box.svg";
import arrowForwardIcon from "../../assets/icons/arrow-forward.svg";
import crownIcon from "../../assets/icons/crown.svg";

interface ButtonContentProps {
  size: "S" | "M" | "L";
  type: keyof typeof TYPES;
  children: React.ReactNode;
  disabled?: boolean;
}

const ButtonContent: React.FC<ButtonContentProps> = ({ type, children }) => {
  switch (type) {
    case "addNewColumn":
    case "plus":
    case "newDashboard":
      return (
        <>
          <span>{children}</span>
          <Image src={addBoxIcon} alt="추가 아이콘" width={22} height={22} />
        </>
      );
    case "dashboardList":
      return (
        <>
          <div>
            <Image src={addBoxIcon} alt="추가 아이콘" width={10} height={10} />
            <StyledSpan>{children}</StyledSpan>
            <Image src={crownIcon} alt="왕관 아이콘" width={15} height={12} />
          </div>
          <Image src={arrowForwardIcon} alt="넘어가기 아이콘" width={16} height={16} />
        </>
      );
    case "invite":
      return (
        <>
          <Image src={addBoxIcon} alt="추가 아이콘" width={14} height={14} />
          <span>{children}</span>
        </>
      );
    default:
      return children;
  }
};

const Button: React.FC<ButtonContentProps> = ({ type, size, children, ...props }) => {
  return (
    <StyledButton type={type} size={size} {...props}>
      <ButtonContent type={type} size={size} children={children} />
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonContentProps>`
  border: 1px solid var(--Gray30);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--White);
  color: var(--Black20);

  font-weight: 500;

  ${({ type, size }) => TYPES[type] && size in TYPES[type] && TYPES[type][size]}
`;

export default Button;
