import React, { useEffect } from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import Input from "@/components/Sign/SignInput/Input";
import { useModal } from "@/hooks/useModal";
import { Controller, useForm } from "react-hook-form";
import { NICKNAME_RULES, PLACEHOLDER } from "@/constants/InputConstant";
import { getUsers, putUsers } from "@/api/users";
import ModalWrapper from "../Modal/ModalWrapper";
import AlertModal from "../Modal/AlertModal";

const AccountProfile = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const { control, handleSubmit, watch, setError, setValue, formState } = useForm({
    defaultValues: { email: "", nickname: "" },
    mode: "onBlur",
  });
  const handleCloseModal = () => {
    closeModalFunc();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const userData = await getUsers({ token });
        if (userData) {
          setValue("email", userData.email);
          setValue("nickname", userData.nickname);
        }
      }
    };

    fetchUserData();
  }, [setValue]);

  return (
    <>
      <Wrapper>
        <Title>프로필</Title>
        <StyledForm
          onSubmit={handleSubmit(async (data) => {
            const res = await putUsers({ nickname: data.nickname, token: localStorage.getItem("accessToken") });
            if (res !== null) {
              return openModalFunc();
            }
            // setError("currentPassword", { message: ERROR_MESSAGE.currentPasswordDifferent });
          })}
        >
          <Container>
            <StyledImageUploadInput type="account" />
            <InputWrapper>
              <Controller control={control} name="email" render={({ field }) => <StyledInput label="이메일" {...field} disabled />} />
              <Controller
                control={control}
                name="nickname"
                rules={NICKNAME_RULES}
                render={({ field, fieldState }) => (
                  <StyledInput label="닉네임" {...field} placeholder={PLACEHOLDER.nickname} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
                )}
              />
            </InputWrapper>
          </Container>
          <SaveButton>저장</SaveButton>
        </StyledForm>
      </Wrapper>
      {isModalOpen && (
        <ModalWrapper>
          <AlertModal type="profileChangeComplete" onClick={handleCloseModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default AccountProfile;

const Wrapper = styled.div`
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  @media (max-width: ${DeviceSize.mobile}) {
    flex-direction: column;
  }
`;

const StyledImageUploadInput = styled(ImageUploadInput)`
  width: 18.2rem;
  height: 18.2rem;
`;

const InputWrapper = styled.div`
  width: 36.6rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledInput = styled(Input)`
  width: 36.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 29rem;
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
