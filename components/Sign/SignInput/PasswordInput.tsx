import VisibilityOff from "@/assets/icons/visibility-off.svg";
import VisibilityOn from "@/assets/icons/visibility-on.svg";
import Input, { InputProps } from "@/components/Sign/SignInput/Input";
import { forwardRef, useState } from "react";
import styled from "styled-components";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ label, value, hasError, errorText, onChange, onBlur, placeholder }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = isPasswordVisible ? "text" : "password";

  const toggleButton = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputContainer>
      <Input ref={ref} label={label} type={inputType} value={value} hasError={hasError} errorText={errorText} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
      <ToggleButton onClick={toggleButton}>{isPasswordVisible ? <VisibilityOff /> : <VisibilityOn />}</ToggleButton>
    </InputContainer>
  );
});

export default PasswordInput;

const InputContainer = styled.div`
  position: relative;

  display: flex;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 4.2rem;
  right: 1.6rem;

  cursor: pointer;
`;
