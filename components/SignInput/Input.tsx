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

// 화살표 함수 말고 function으로 어떻게 해야할 지 모르겠음ㅠㅠ
// ref를 쓰지 않으면 에러가 뜸..! 왜지!? 추후에 알아보기..
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, value, hasError = false, errorText, onChange, onBlur, placeholder }, ref) => {
  return (
    <InputBox>
      <Label>{label}</Label>
      <StyledInput ref={ref} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
      {hasError && <Error>{errorText}</Error>}
    </InputBox>
  );
});

export default Input;

const InputBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Label = styled.label`
  color: var(--Black20);
  font-size: 1.6rem;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 52rem;
  height: 5rem;

  padding: 1.5rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  /* 왜 안되지..ㅠㅠ */
  border: 1px solid ${({ hasError }) => (hasError ? "var(--Red)" : "var(--Gray30)")};
  background: var(--White);

  &:focus {
    outline: none;
    border-color: var(--Violet);
  }
`;

const Error = styled.p`
  color: var(--Red);
  font-size: 1.4rem;
`;
