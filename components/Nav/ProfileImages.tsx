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
              {/* <EllipseImg src={Ellipse} /> */}
              <NumberBackground src={numberBackground} alt="숫자 배경" />
              <Number>+{totalCount - 4}</Number>
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

  p {
    width: 2rem;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;

    z-index: 5;
  }
  /* @media (max-width: 1199px) {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  } */
`;

const ProfileImg = styled(Image)<{ index: number }>`
  width: 3.8rem;
  height: 3.8rem;

  padding: 0;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ index }) => `${(index + 1) * 3}rem`};

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
