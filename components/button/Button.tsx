import React from "react";
import styled from "styled-components";
import { TYPES, StyledSpan } from "./ButtonStyles";
import Image from "next/image";
import AddBoxIcon from "../../assets/icons/add-box.svg";
import ArrowIcon from "../../assets/icons/arrow-forward.svg";
import CrownIcon from "../../assets/icons/crown.svg";

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
          <AddBoxIcon />
          {/* chip으로 변경 필요 */}
        </>
      );
    case "dashboardList":
      return (
        <>
          <div>
            <AddBoxIcon />
            {/* chip으로 변경 필요 */}
            <StyledSpan>{children}</StyledSpan>
            <CrownIcon />
          </div>
          <ArrowIcon />
        </>
      );
    case "invite":
      return (
        <>
          <StyledAddBoxIcon type={type} />
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

const StyledAddBoxIcon = styled(AddBoxIcon)`
  path {
    fill: ${({ type }) => (type === "invite" ? "var(--White)" : "currentColor")};
  }
`;

export default Button;
