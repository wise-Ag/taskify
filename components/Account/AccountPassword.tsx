import React from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ImageUploadInput from "@/components/ModalInput/ImageUploadInput";
import PasswordInput from "@/components/SignInput/PasswordInput";

const AccountProfile = () => {
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
        <PasswordInput label="비밀번호" value={""} placeholder={"현재 비밀번호 입력"} onChange={handleCurrentPassword} />
        <PasswordInput label="비밀번호" value={""} placeholder={"새 비밀번호 입력"} onChange={handleNewPassword} />
        <PasswordInput label="비밀번호 확인" value={""} placeholder={"새 비밀번호 확인"} onChange={handleNewPasswordCheck} />
      </InputWrapper>
      <SaveButton>변경</SaveButton>
    </Container>
  );
};

export default AccountProfile;

const Container = styled.div`
  max-width: 62rem;

  margin: 2.5rem 2rem;
  padding: 3.2rem 2.8rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background-color: lightgray;
  /* 영역 검토 완료 후 white로 변경 */

  @media (max-width: ${DeviceSize.mobile}) {
    margin: 2rem 1.2rem;
  }
`;

const Title = styled.p`
  margin-bottom: 3.2rem;

  font-size: 2.4rem;
  font-weight: 700;
  color: var(--Black);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
`;

const StyledImageUploadInput = styled(ImageUploadInput)`
  width: 18.2rem;
  height: 18.2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
