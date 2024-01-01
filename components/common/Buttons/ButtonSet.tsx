import ArrowIcon from "@/assets/icons/arrow-forward.svg";
import TYPES from "@/components/common/Buttons/ButtonSetStyles";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  isLeftDisabled?: boolean;
  isRightDisabled?: boolean;
  $buttonType: keyof typeof TYPES;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

type ButtonCommonProps = Omit<ButtonProps, "$buttonType">;

interface ButtonSetProps extends ButtonCommonProps {
  type: "forwardAndBackward" | "acceptAndReject" | "modalSet";
  children?: ReactNode;
}

const ButtonSet = ({ type, isLeftDisabled, isRightDisabled, children, onClickLeft, onClickRight }: ButtonSetProps) => {
  return (
    <ButtonSetContainer type={type}>
      {type === "forwardAndBackward" && (
        <>
          <Button $buttonType="backward" disabled={isLeftDisabled} onClick={onClickLeft}>
            <StyledArrowIcon disabled={isLeftDisabled} />
          </Button>
          <Button $buttonType="forward" disabled={isRightDisabled} onClick={onClickRight}>
            <StyledArrowIcon disabled={isRightDisabled} />
          </Button>
        </>
      )}
      {type === "acceptAndReject" && (
        <>
          <Button $buttonType="accept" disabled={isLeftDisabled} onClick={onClickLeft}>
            수락
          </Button>
          <Button $buttonType="reject" disabled={isRightDisabled} onClick={onClickRight}>
            거절
          </Button>
        </>
      )}
      {type === "modalSet" && (
        <>
          <Button type="button" $buttonType="cancel" disabled={isLeftDisabled} onClick={onClickLeft}>
            취소
          </Button>
          <Button type="submit" $buttonType="basic" disabled={isRightDisabled} onClick={onClickRight}>
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
