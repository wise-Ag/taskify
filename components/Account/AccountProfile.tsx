import React from "react";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ImageUploadInput from "../ModalInput/ImageUploadInput";
import Input from "../SignInput/Input";

const AccountProfile = () => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("이메일 변경:", event.target.value);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("닉네임 변경:", event.target.value);
  };

  return (
    <Container>
      <Title>프로필</Title>
      <Wrapper>
        <StyledImageUploadInput type="account" />
        <InputWrapper>
          {/* 이메일, 닉네임 인풋 컴포넌트 사이즈 조정 필요 */}
          <Input label="이메일" value={""} placeholder={"/* 유저 이메일 정보 */"} onChange={handleEmailChange} />
          <Input label="닉네임" value={""} placeholder={"/* 유저 닉네임 정보 */"} onChange={handleNicknameChange} />
        </InputWrapper>
      </Wrapper>
      <SaveButton>저장</SaveButton>
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
