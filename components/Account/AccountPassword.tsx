import { putPassword } from "@/api/auth";
import AlertModal from "@/components/Modal/AlertModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import PasswordInput from "@/components/Sign/SignInput/PasswordInput";
import { CURRENT_PASSWORD_RULES, ERROR_MESSAGE, NEW_PASSWORD_RULES, PLACEHOLDER } from "@/constants/InputConstant";
import { useModal } from "@/hooks/useModal";
import { DeviceSize } from "@/styles/DeviceSize";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const AccountPassword = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const { control, handleSubmit, watch, setError, reset, formState } = useForm({
    defaultValues: { currentPassword: "", newPassword: "", confirmNewPassword: "" },
    mode: "onBlur",
  });

  const handleCloseModal = () => {
    closeModalFunc();
  };

  return (
    <>
      <Container>
        <Title>비밀번호 변경</Title>
        <StyledForm
          onSubmit={handleSubmit(async (data) => {
            const res = await putPassword({ password: data.currentPassword, newPassword: data.newPassword, token: localStorage.getItem("accessToken") });
            if (res == "현재 비밀번호가 틀렸습니다.") {
              setError("currentPassword", { message: ERROR_MESSAGE.currentPasswordDifferent });
              return;
            }
            if (res == "기존 비밀번호와 동일합니다.") {
              setError("newPassword", { message: ERROR_MESSAGE.currentEqualNewPassword });
              return;
            }
            if (res !== null) {
              reset();
              return openModalFunc();
            }
          })}
        >
          <InputWrapper>
            <Controller
              control={control}
              name="currentPassword"
              rules={CURRENT_PASSWORD_RULES}
              render={({ field, fieldState }) => (
                <StyledPasswordInput
                  label="현재 비밀번호"
                  {...field}
                  placeholder={PLACEHOLDER.currentPassword}
                  hasError={Boolean(fieldState.error)}
                  errorText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="newPassword"
              rules={NEW_PASSWORD_RULES}
              render={({ field, fieldState }) => (
                <StyledPasswordInput
                  label="새 비밀번호"
                  {...field}
                  placeholder={PLACEHOLDER.newPassword}
                  hasError={Boolean(fieldState.error)}
                  errorText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmNewPassword"
              rules={{
                required: ERROR_MESSAGE.confirmNewPasswordRequired,
                validate: {
                  isMatch: (value) => {
                    if (value !== watch("newPassword")) {
                      return ERROR_MESSAGE.confirmPasswordCheck;
                    }
                    return true;
                  },
                },
              }}
              render={({ field, fieldState }) => (
                <StyledPasswordInput
                  label="새 비밀번호 확인"
                  {...field}
                  placeholder={PLACEHOLDER.confirmNewPassword}
                  hasError={Boolean(fieldState.error)}
                  errorText={fieldState.error?.message}
                />
              )}
            />
          </InputWrapper>
          <SaveButton disabled={!formState.isValid}>변경</SaveButton>
        </StyledForm>
      </Container>
      {isModalOpen && (
        <ModalWrapper>
          <AlertModal type="passwordChangeComplete" onClick={handleCloseModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default AccountPassword;

const Container = styled.div`
  max-width: 62rem;

  padding: 3.2rem 2.8rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background-color: var(--White);
`;

const Title = styled.p`
  margin-bottom: 3.2rem;

  font-size: 2.4rem;
  font-weight: 700;
  color: var(--Black);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.4rem;
`;

const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledPasswordInput = styled(PasswordInput)`
  width: 56.4rem;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 48.8rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 24.4rem;
  }
`;

const SaveButton = styled.button<{ disabled: boolean }>`
  width: 8.4rem;
  height: 3.2rem;

  border-radius: 4px;

  background-color: var(--Main);

  color: var(--White);
  font-size: 1.4rem;

  ${({ disabled }) =>
    disabled &&
    `
      background: var(--Gray9f);
      cursor: default;
    `}
`;
