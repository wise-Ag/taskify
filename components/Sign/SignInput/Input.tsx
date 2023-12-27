import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, forwardRef } from "react";
import styled from "styled-components";

export interface InputProps {
  label: "이메일" | "비밀번호" | "비밀번호 확인" | "닉네임";
  type?: HTMLInputTypeAttribute;
  value: string;
  hasError?: boolean;
  errorText?: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, value, hasError = false, errorText, onChange, onBlur, placeholder }, ref) => {
  return (
    <InputBox>
      <Label>{label}</Label>
      <StyledInput ref={ref} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} className={hasError ? "error" : ""} />
      {hasError && <Error>{errorText}</Error>}
    </InputBox>
  );
});

export default Input;

const InputBox = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Label = styled.label`
  color: var(--Black33);
  font-size: 1.6rem;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 5rem;

  padding: 1.5rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  border: 1px solid var(--Grayd9);
  background: var(--White);

  &:focus {
    outline: none;
    border-color: var(--Main);
  }

  &.error {
    border-color: var(--Red);
  }
`;

const Error = styled.p`
  color: var(--Red);
  font-size: 1.4rem;
`;
