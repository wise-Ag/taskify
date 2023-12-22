import Input from "@/components/SignInput/Input";
import PasswordInput from "@/components/SignInput/PasswordInput";
import { ERROR_MESSAGE, PASSWORD_RULES, PLACEHOLDER } from "@/utils/InputConstant";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

// 나머지 에러는 페이지 만들때 수정!?
const SignUpForm = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", nickname: "", password: "", confirmPassword: "" },
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
        name="nickname"
        rules={{
          required: ERROR_MESSAGE.nicknameRequired,
          maxLength: { value: 10, message: ERROR_MESSAGE.nicknameInvalid },
        }}
        render={({ field, fieldState }) => (
          <Input label="닉네임" {...field} placeholder={PLACEHOLDER.nickname} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={PASSWORD_RULES}
        render={({ field, fieldState }) => (
          <PasswordInput label="비밀번호" {...field} placeholder={PLACEHOLDER.signUpPassword} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: ERROR_MESSAGE.passwordRequired,
          validate: {
            isMatch: (value) => {
              if (value !== watch("password")) {
                return ERROR_MESSAGE.passwordCheck;
              }
              return true;
            },
          },
        }}
        render={({ field, fieldState }) => (
          <PasswordInput label="비밀번호 확인" {...field} placeholder={PLACEHOLDER.signUpPassword} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
    </StyledForm>
  );
};

export default SignUpForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  width: 100%;
`;
