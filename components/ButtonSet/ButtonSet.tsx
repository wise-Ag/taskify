import React from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "../../assets/icons/arrow-forward.svg";
import TYPES from "./ButtonSetStyles";

interface ButtonProps {
  size: "S" | "M" | "L";
  isDisabled?: boolean;
  buttonType: keyof typeof TYPES;
}

type ButtonCommonProps = Omit<ButtonProps, "buttonType">;

interface ButtonSetProps extends ButtonCommonProps {
  type: "forwardAndBackward" | "acceptAndReject" | "modalSet";
  children?: React.ReactNode;
}

const ButtonSet: React.FC<ButtonSetProps> = ({ type, size, isDisabled, children }) => {
  return (
    <ButtonSetContainer type={type}>
      {type === "forwardAndBackward" && (
        <>
          <Button buttonType="forward" size={size} disabled={isDisabled}>
            <StyledArrowIcon disabled={isDisabled} />
          </Button>
          <Button buttonType="backward" size={size} disabled={isDisabled}>
            <StyledArrowIcon disabled={isDisabled} />
          </Button>
        </>
      )}
      {type === "acceptAndReject" && (
        <>
          <Button buttonType="accept" size={size} disabled={isDisabled}>
            수락
          </Button>
          <Button buttonType="reject" size={size} disabled={isDisabled}>
            거절
          </Button>
        </>
      )}
      {type === "modalSet" && (
        <>
          <Button buttonType="cancel" size={size} disabled={isDisabled}>
            취소
          </Button>
          <Button buttonType="basic" size={size} disabled={isDisabled}>
            {children}
          </Button>
        </>
      )}
    </ButtonSetContainer>
  );
};

const ButtonSetContainer = styled.div<{ type: "forwardAndBackward" | "acceptAndReject" | "modalSet" }>`
  display: flex;

  ${({ type }) =>
    type === "acceptAndReject" &&
    css`
      gap: 1rem;
    `}
  ${({ type }) =>
    type === "modalSet" &&
    css`
      gap: 1.2rem;
    `}
`;

const Button = styled.button<ButtonProps>`
  border: 1px solid var(--Gray30);
  border-radius: 8px;

  background-color: var(--White);
  color: var(--Black20);

  font-weight: 500;

  ${({ buttonType, size }) => TYPES[buttonType] && size in TYPES[buttonType] && TYPES[buttonType][size]}
`;

const StyledArrowIcon = styled(ArrowIcon)`
  path {
    fill: ${(props) => (props.disabled ? "var(--Gray30)" : "var(--Black20)")};
  }
`;

export default ButtonSet;
