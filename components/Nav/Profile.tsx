import Image from "next/image";
import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

interface ProfileProps {
  profileImageUrl: string;
  nickname: string;
}

function Profile({ profileImageUrl, nickname }: ProfileProps) {
  return (
    <Wrapper>
      <ProfileIcon src={profileImageUrl} alt="프로필 아이콘" />
      <Name>{nickname}</Name>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ProfileIcon = styled(Image)`
  width: 3.8rem;
  height: 3.8rem;
`;

const Name = styled.div`
  color: var(--Black20);
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;
