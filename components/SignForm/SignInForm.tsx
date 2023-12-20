import Input from "@/components/SignInput/Input";
import PasswordInput from "@/components/SignInput/PasswordInput";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/utils/InputConstant";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

function SignInForm() {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  return (
    <StyledForm>
      <Controller
        control={control}
        name="email"
        rules={{
          required: ERROR_MESSAGE.emailRequired,
          pattern: { value: /\S+@\S+\.\S+/, message: ERROR_MESSAGE.emailInvalid },
        }}
        render={({ field, fieldState }) => (
          <Input label="이메일" {...field} placeholder={PLACEHOLDER.email} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: ERROR_MESSAGE.passwordRequired,
          minLength: { value: 8, message: ERROR_MESSAGE.passwordInvalid },
        }}
        render={({ field, fieldState }) => (
          <PasswordInput label="비밀번호" {...field} placeholder={PLACEHOLDER.password} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
    </StyledForm>
  );
}

export default SignInForm;

const StyledForm = styled.form``;
