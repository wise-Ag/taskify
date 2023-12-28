import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import PasswordInput from "@/components/Sign/SignInput/PasswordInput";
import { Controller, useForm } from "react-hook-form";
import { CURRENT_PASSWORD_RULES, ERROR_MESSAGE, NEW_PASSWORD_RULES, PLACEHOLDER } from "@/constants/InputConstant";

const AccountPassword = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { currentPassword: "", newPassword: "", confirmNewPassword: "" },
    mode: "onBlur",
  });

  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <StyledForm>
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
        <SaveButton>변경</SaveButton>
      </StyledForm>
    </Container>
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

const SaveButton = styled.button`
  width: 8.4rem;
  height: 3.2rem;

  border-radius: 4px;

  background-color: var(--Main);

  color: var(--White);
  font-size: 1.4rem;
`;
