import ArrowIcon from "@/assets/icons/arrow-forward.svg";
import TYPES from "@/components/common/Buttons/ButtonSetStyles";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  isDisabled?: boolean;
  $buttonType: keyof typeof TYPES;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

type ButtonCommonProps = Omit<ButtonProps, "$buttonType">;

interface ButtonSetProps extends ButtonCommonProps {
  type: "forwardAndBackward" | "acceptAndReject" | "modalSet";
  children?: ReactNode;
}

const ButtonSet = ({ type, isDisabled, children, onClickLeft, onClickRight }: ButtonSetProps) => {
  return (
    <ButtonSetContainer type={type}>
      {type === "forwardAndBackward" && (
        <>
          <Button $buttonType="backward" disabled={isDisabled} onClick={onClickLeft}>
            <StyledArrowIcon disabled={isDisabled} />
          </Button>
          <Button $buttonType="forward" disabled={isDisabled} onClick={onClickRight}>
            <StyledArrowIcon disabled={isDisabled} />
          </Button>
        </>
      )}
      {type === "acceptAndReject" && (
        <>
          <Button $buttonType="accept" disabled={isDisabled} onClick={onClickLeft}>
            수락
          </Button>
          <Button $buttonType="reject" disabled={isDisabled} onClick={onClickRight}>
            거절
          </Button>
        </>
      )}
      {type === "modalSet" && (
        <>
          <Button $buttonType="cancel" onClick={onClickLeft}>
            취소
          </Button>
          <Button $buttonType="basic" disabled={isDisabled} onClick={onClickRight}>
            {children}
          </Button>
        </>
      )}
    </ButtonSetContainer>
  );
};

export default ButtonSet;

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

  ${({ $buttonType }) => TYPES[$buttonType]};

  ${(props) => props.disabled && "cursor: default"};
`;

const StyledArrowIcon = styled(ArrowIcon)`
  path {
    fill: ${(props) => (props.disabled ? "var(--Grayd9)" : "var(--Black33)")};
  }
`;
