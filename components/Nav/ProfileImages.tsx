import styled from "styled-components";
import { memberData } from "./mockData";
import { DeviceSize } from "@/styles/DeviceSize";
import NoProfileImage from "@/components/NoProfileImage/ProfileImage";

const ProfileImages = () => {
  const { members, totalCount } = memberData;

  return (
    <>
      {totalCount > 0 && (
        <Contents>
          {members.slice(0, 4).map((member, index) =>
            member.profileImageUrl ? (
              <ProfileImg key={member.id} index={index} image={member.profileImageUrl} />
            ) : (
              <NoProfileImageWrapper index={index}>
                <NoProfileImage />
              </NoProfileImageWrapper>
            ),
          )}
          {totalCount > 4 && (
            <NumberWrapper>
              <NumberBackground />
              <NumberPc>+{totalCount - 4}</NumberPc>
              <NumberTabletOrMobile>+{totalCount - 2}</NumberTabletOrMobile>
            </NumberWrapper>
          )}
        </Contents>
      )}
    </>
  );
};

export default ProfileImages;

const Contents = styled.div`
  width: 15.8rem;

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 9.8rem;

    & > :nth-child(n + 3) {
      display: none;
    }

    & > :nth-last-child(-n + 1) {
      display: block;
    }
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 8.2rem;
  }
`;

const ProfileImg = styled.div<{ index: number; image: string }>`
  width: 3.8rem;
  height: 3.8rem;

  padding: 0;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ index }) => `${(index + 1) * 3}rem`};

  border-radius: 100%;
  border: 2px solid var(--White);

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  z-index: ${({ index }) => `${3 - index}`};

  @media (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

const NoProfileImageWrapper = styled.div<{ index: number }>`
  line-height: 3.8rem;

  padding: 0;

  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ index }) => `${(index + 1) * 3}rem`};

  z-index: ${({ index }) => `${3 - index}`};

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
    line-height: 3.4rem;

    right: ${({ index }) => `${(index + 1) * 2.4}rem`};
  }
`;

const NumberWrapper = styled.div`
  z-index: 5;

  > p {
    width: 2rem;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;

    color: #d25b68;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;

    @media (max-width: ${DeviceSize.mobile}) {
      right: 0.8rem;

      font-size: 1.4rem;
    }
  }
`;

const NumberBackground = styled.div`
  width: 3.8rem;
  height: 3.8rem;

  background-color: #f4d7da;

  border-radius: 100%;
  border: 2px solid var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

const NumberPc = styled.p`
  @media (max-width: ${DeviceSize.tablet}) {
    display: none;
  }
`;

const NumberTabletOrMobile = styled.p`
  display: none;

  @media (max-width: ${DeviceSize.tablet}) {
    display: block;
  }
`;
