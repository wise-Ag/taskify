import visibilityOff from "@/assets/icons/visibility-off.svg";
import visibilityOn from "@/assets/icons/visibility-on.svg";
import Input, { InputProps } from "@/components/SignInput/Input";
import Image from "next/image";
import { forwardRef, useMemo, useState } from "react";
import styled from "styled-components";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ label, value, hasError, errorText, onChange, onBlur, placeholder }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = useMemo(() => (isPasswordVisible ? "text" : "password"), [isPasswordVisible]);
  const ToggleIcon = useMemo(
    () => <ToggleButton src={isPasswordVisible ? visibilityOff : visibilityOn} alt="눈 아이콘" onClick={() => setIsPasswordVisible(!isPasswordVisible)} />,
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

const ToggleButton = styled(Image)`
  position: absolute;
  top: 4.2rem;
  right: 1.6rem;
`;
