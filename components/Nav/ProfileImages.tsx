import styled from "styled-components";
import { memberData } from "./mockData";
import Image from "next/image";
import numberBackground from "@/assets/icons/number-background.svg";

function ProfileImages() {
  const { members, totalCount } = memberData;

  return (
    <>
      {totalCount > 0 && (
        <Contents>
          {members.slice(0, 4).map((member, index) => (
            <ProfileImg src={member.profileImageUrl} alt="프로필 이미지" key={index} index={index} />
          ))}
          {totalCount > 4 && (
            <>
              <NumberBackground src={numberBackground} alt="숫자 배경" />
              <Number>+{totalCount - 4}</Number> {/* 숫자는 어떻게 변경하는거지..ㅠㅠ */}
            </>
          )}
        </Contents>
      )}
    </>
  );
}

export default ProfileImages;

const Contents = styled.div`
  width: 15.8rem;

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    & > :nth-child(n + 3) {
      display: none;
    }

    & > :nth-last-child(-n + 2) {
      display: block;
    }
  }

  p {
    width: 2rem;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;

    z-index: 5;
  }
`;

const ProfileImg = styled(Image)<{ index: number }>`
  width: 3.8rem;
  height: 3.8rem;

  padding: 0;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ index }) => `${(index + 1) * 3}rem`};

  border-radius: 100%;
  border: 2px solid var(--White);

  z-index: ${({ index }) => `${3 - index}`};
`;

const NumberBackground = styled(Image)`
  width: 3.8rem;
  height: 3.8rem;

  z-index: 5;
`;

const Number = styled.p`
  color: #d25b68;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
`;
