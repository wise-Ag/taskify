import React from "react";
import styled, { css } from "styled-components";
import TYPES from "./ButtonSetStyles";
import Image from "next/image";
import arrowForwardIcon from "../../assets/icons/arrow-forward.svg";

interface ButtonProps {
  size: "S" | "M" | "L";
  isDisabled?: boolean;
  buttonType: keyof typeof TYPES;
}

interface ButtonSetProps extends ButtonProps {
  type: "forwardAndBackward" | "acceptAndReject" | "modalSet";
  children?: React.ReactNode;
}

const ButtonSet: React.FC<ButtonSetProps> = ({ type, size, isDisabled, children }) => {
  return (
    <ButtonSetContainer type={type}>
      {type === "forwardAndBackward" && (
        <>
          <Button buttonType="backward" size={size} disabled={isDisabled}>
            <Image src={arrowForwardIcon} alt="이전" width={16} height={16} />
          </Button>
          <Button buttonType="forward" size={size} disabled={isDisabled}>
            <Image src={arrowForwardIcon} alt="다음" width={16} height={16} />
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

export default ButtonSet;
