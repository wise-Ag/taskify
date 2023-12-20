import React from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "@/assets/icons/arrow-forward.svg";
import TYPES from "./ButtonSetStyles";

interface ButtonProps {
  isDisabled?: boolean;
  buttonType: keyof typeof TYPES;
}

type ButtonCommonProps = Omit<ButtonProps, "buttonType">;

interface ButtonSetProps extends ButtonCommonProps {
  type: "forwardAndBackward" | "acceptAndReject" | "modalSet";
  children?: React.ReactNode;
}

const ButtonSet: React.FC<ButtonSetProps> = ({ type, isDisabled, children }) => {
  return (
    <ButtonSetContainer type={type}>
      {type === "forwardAndBackward" && (
        <>
          <Button buttonType="forward" disabled={isDisabled}>
            <StyledArrowIcon disabled={isDisabled} />
          </Button>
          <Button buttonType="backward" disabled={isDisabled}>
            <StyledArrowIcon disabled={isDisabled} />
          </Button>
        </>
      )}
      {type === "acceptAndReject" && (
        <>
          <Button buttonType="accept" disabled={isDisabled}>
            수락
          </Button>
          <Button buttonType="reject" disabled={isDisabled}>
            거절
          </Button>
        </>
      )}
      {type === "modalSet" && (
        <>
          <Button buttonType="cancel" disabled={isDisabled}>
            취소
          </Button>
          <Button buttonType="basic" disabled={isDisabled}>
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
  border: 1px solid var(--Grayd9);
  border-radius: 8px;

  background-color: var(--White);
  color: var(--Black33);

  font-weight: 500;

  ${({ buttonType }) => TYPES[buttonType]}
`;

const StyledArrowIcon = styled(ArrowIcon)`
  path {
    fill: ${(props) => (props.disabled ? "var(--Grayd9)" : "var(--Black33)")};
  }
`;

export default ButtonSet;
