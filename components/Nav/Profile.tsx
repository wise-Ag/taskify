import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface ProfileProps {
  profileImageUrl: string;
  nickname: string;
}

function Profile({ profileImageUrl, nickname }: ProfileProps) {
  return (
    <Wrapper>
      <ProfileIcon image={profileImageUrl} />
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

  /* background-image: url(${(props) => props.image}); */
  /* 추후에 데이터 받아오면 위와 같은 형식으로 수정.. */
  background-image: url("https://www.fitpetmall.com/wp-content/uploads/2023/09/shutterstock_2205178589-1-1.png");
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
