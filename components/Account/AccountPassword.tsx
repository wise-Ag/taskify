import React from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import PasswordInput from "@/components/Sign/SignInput/PasswordInput";

const AccountPassword = () => {
  const handleCurrentPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("현재 비밀번호:", event.target.value);
  };

  const handleNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("새 비밀번호:", event.target.value);
  };

  const handleNewPasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("비밀번호 확인:", event.target.value);
  };

  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <InputWrapper>
        <StyledPasswordInput label="비밀번호" value={""} placeholder={"현재 비밀번호 입력"} onChange={handleCurrentPassword} />
        <StyledPasswordInput label="비밀번호" value={""} placeholder={"새 비밀번호 입력"} onChange={handleNewPassword} />
        <StyledPasswordInput label="비밀번호 확인" value={""} placeholder={"새 비밀번호 확인"} onChange={handleNewPasswordCheck} />
      </InputWrapper>
      <SaveButton>변경</SaveButton>
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

const InputWrapper = styled.div`
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

  margin: 2.4rem 0 -0.4rem auto;
  border-radius: 4px;

  background-color: var(--Main);

  color: var(--White);
  font-size: 1.4rem;
`;
