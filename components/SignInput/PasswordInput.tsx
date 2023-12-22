import VisibilityOff from "@/assets/icons/visibility-off.svg";
import VisibilityOn from "@/assets/icons/visibility-on.svg";
import Input, { InputProps } from "@/components/SignInput/Input";
import { forwardRef, useMemo, useState } from "react";
import styled from "styled-components";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ label, value, hasError, errorText, onChange, onBlur, placeholder }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = useMemo(() => (isPasswordVisible ? "text" : "password"), [isPasswordVisible]);
  const ToggleIcon = useMemo(
    () => <ToggleButton onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? <VisibilityOff /> : <VisibilityOn />}</ToggleButton>,
    [isPasswordVisible],
  );

  return (
    <InputContainer>
      <Input ref={ref} label={label} type={inputType} value={value} hasError={hasError} errorText={errorText} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
      {ToggleIcon}
    </InputContainer>
  );
});

export default PasswordInput;

const InputContainer = styled.div`
  width: 52rem;

  position: relative;

  display: flex;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 4.2rem;
  right: 1.6rem;
`;
