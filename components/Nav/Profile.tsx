import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import NoProfileImage from "../NoProfileImage/ProfileImage";

interface ProfileProps {
  profileImageUrl: string | null;
  nickname: string;
}

function Profile({ profileImageUrl, nickname }: ProfileProps) {
  return (
    <Wrapper>
      {profileImageUrl ? (
        <ProfileIcon image={profileImageUrl} />
      ) : (
        <NoProfileImageWrapper>
          <NoProfileImage />
        </NoProfileImageWrapper>
      )}
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

const ProfileIcon = styled.div<{ image: string }>`
  width: 3.8rem;
  height: 3.8rem;

  border-radius: 100%;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Name = styled.div`
  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const NoProfileImageWrapper = styled.div`
  width: 3.8rem;

  font-size: 1.5rem;
  line-height: 3.8rem;
`;
