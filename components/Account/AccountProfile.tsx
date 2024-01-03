import { getUsers, postProfileImage, putUsers } from "@/api/users";
import AlertModal from "@/components/Modal/AlertModal";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Input from "@/components/Sign/SignInput/Input";
import { NICKNAME_RULES, PLACEHOLDER } from "@/constants/InputConstant";
import { useModal } from "@/hooks/useModal";
import { profileImageAtom, userProfileImageUrlAtom, userDataAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { SetStateAction, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

interface ProfileFormData {
  email: string;
  nickname: string;
}

const AccountProfile = () => {
  const [profileImage, setProfileImage] = useAtom(profileImageAtom);
  const [userProfileImageUrl, setUserProfileImageUrl] = useAtom(userProfileImageUrlAtom);
  const [userData, setUserData] = useAtom(userDataAtom);
  const [initialNickname, setInitialNickname] = useState("");
  const [isImageDeleted, setIsImageDeleted] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const { control, handleSubmit, watch, setError, setValue, formState } = useForm({
    defaultValues: { email: "", nickname: "" },
    mode: "onBlur",
  });

  const handleCloseModal = () => {
    closeModalFunc();
  };

  const handleImageDelete = (value: SetStateAction<boolean>) => {
    setIsImageDeleted(value);
  };

  const handleProfileSubmit = async (data: ProfileFormData) => {
    let imageUrl = isImageDeleted ? null : userProfileImageUrl;

    if (profileImage && profileImage instanceof File) {
      const formData = new FormData();
      formData.append("image", profileImage);

      const profileImageRes = await postProfileImage({ formData, token });
      if (profileImageRes === null) {
        alert("이미지 저장에 실패했습니다");
        return;
      }
      imageUrl = profileImageRes.profileImageUrl;
      setUserProfileImageUrl(imageUrl);
    }

    const nicknameChanged = data.nickname !== initialNickname;

    if (nicknameChanged || imageUrl !== userProfileImageUrl) {
      const userUpdateRes = await putUsers({
        nickname: data.nickname,
        profileImageUrl: imageUrl,
        token,
      });

      if (userUpdateRes !== null) {
        openModalFunc();
        setUserData(userUpdateRes);
      } else {
        console.error("Failed to update profile", Error);
      }
    } else {
      alert("변경된 사항이 없습니다.");
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }

    const fetchUserData = async () => {
      if (storedToken) {
        const userData = await getUsers({ token: storedToken });
        if (userData) {
          setValue("email", userData.email);
          setValue("nickname", userData.nickname);
          setInitialNickname(userData.nickname);
          setUserProfileImageUrl(userData.profileImageUrl);
        }
      }
    };

    fetchUserData();
  }, [setValue, setToken]);

  return (
    <>
      <Wrapper>
        <Title>프로필</Title>
        <StyledForm onSubmit={handleSubmit(handleProfileSubmit)}>
          <Container>
            <StyledImageUploadInput type="account" atomtype="profileImage" initialImageUrl={userProfileImageUrl} handleDeleteClick={handleImageDelete} />
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
          <SaveButton type="submit">저장</SaveButton>
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
