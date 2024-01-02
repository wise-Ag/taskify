import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import NoProfileImage from "../NoProfileImage/ProfileImage";
import { Member } from "@/api/members/members.types";

const MemberListDropdown = ({ members }: { members: Member[] }) => {
  return (
    <Dropdown>
      {members.map((member) => (
        <Item key={member.id}>
          {member.profileImageUrl ? (
            <Profile $image={member.profileImageUrl} />
          ) : (
            <NoProfileImageWrapper>
              <NoProfileImage id={member.userId} nickname={member.nickname} />
            </NoProfileImageWrapper>
          )}

          <div key={member.id}>{member.nickname}</div>
        </Item>
      ))}
    </Dropdown>
  );
};

export default MemberListDropdown;

const Dropdown = styled.div`
  width: 16rem;

  border: 1px solid var(--Grayd9);
  border-radius: 16px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  position: absolute;
  top: 8%;

  background-color: white;
`;

const Item = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--Grayd9);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--MainBG);

  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 400;

  &:first-child {
    border-radius: 15px 15px 0 0;
  }

  &:last-child {
    border-bottom: 0;
    border-radius: 0 0 15px 15px;
  }
`;

const Profile = styled.div<{ $image: string }>`
  width: 3rem;
  height: 3rem;

  margin-right: 1.2rem;

  border-radius: 50%;

  object-fit: cover;
  background-image: url(${(props) => props.$image});
  background-size: cover;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;

    margin-right: 0.8rem;
  }
`;

const NoProfileImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;

  font-size: 1.5rem;
  line-height: 3rem;
  margin-right: 1.2rem;

  border-radius: 100%;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;

    margin-right: 0.8rem;
  }
`;
