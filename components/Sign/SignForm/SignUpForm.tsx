import { postUsers } from "@/api/users";
import AlertModal from "@/components/Modal/AlertModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Input from "@/components/Sign/SignInput/Input";
import PasswordInput from "@/components/Sign/SignInput/PasswordInput";
import Button from "@/components/common/Buttons/Button";
import { ERROR_MESSAGE, NICKNAME_RULES, SIGNUP_PASSWORD_RULES, PLACEHOLDER } from "@/constants/InputConstant";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const SignUpForm = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", nickname: "", password: "", confirmPassword: "" },
    mode: "onBlur",
  });

  const router = useRouter();

  const handleCloseModal = () => {
    closeModalFunc();
    router.push("/signin");
  };
  return (
    <>
      <StyledForm
        onSubmit={handleSubmit(async (data) => {
          const res = await postUsers({ email: data.email, password: data.password, nickname: data.nickname });
          if (res !== null) {
            openModalFunc();
          }
          setError("email", { message: ERROR_MESSAGE.emailDuplicate });
        })}
      >
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
          rules={NICKNAME_RULES}
          render={({ field, fieldState }) => (
            <Input label="닉네임" {...field} placeholder={PLACEHOLDER.nickname} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={SIGNUP_PASSWORD_RULES}
          render={({ field, fieldState }) => (
            <PasswordInput label="비밀번호" {...field} placeholder={PLACEHOLDER.signUpPassword} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: ERROR_MESSAGE.confirmPasswordRequired,
            validate: {
              isMatch: (value) => {
                if (value !== watch("password")) {
                  return ERROR_MESSAGE.confirmPasswordCheck;
                }
                return true;
              },
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput label="비밀번호 확인" {...field} placeholder={PLACEHOLDER.signUpPassword} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
          )}
        />
        <ButtonWrapper>
          <Button type="login">가입하기</Button>
        </ButtonWrapper>
      </StyledForm>
      {isModalOpen && (
        <ModalWrapper>
          <AlertModal type="complete" onClick={handleCloseModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default SignUpForm;

const StyledForm = styled.form`
  width: 52rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.4rem;
`;
