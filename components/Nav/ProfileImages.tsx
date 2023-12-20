import styled from "styled-components";
import { memberData } from "./mockData";
// import { useMediaQuery } from "react-responsive";

function ProfileImages() {
  const { members, totalCount } = memberData;
  // const isPc = useMediaQuery({
  //   query: "(min-width: 1024px)",
  // });
  // const isTabletorMobile = useMediaQuery({
  //   query: "(max-width: 1024px)",
  // });

  return (
    <>
      {totalCount > 0 && (
        <Contents>
          {members.slice(0, 4).map((member, index) => (
            // <ProfileImg src={member.profileImageUrl} alt="프로필 이미지" key={index} index={index} />
            <ProfileImg image={member.profileImageUrl} key={index} index={index} />
          ))}
          {totalCount > 4 && (
            <>
              <NumberBackground />
              {/* {isPc && <Number>+{totalCount - 4}</Number>}
              {isTabletorMobile && <Number>+{totalCount - 2}</Number>} */}
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

  /* background-image: url(${(props) => props.image}); */
  /* 추후에 데이터 받아오면 위와 같은 형식으로 수정.. */
  background-image: url("https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  z-index: ${({ index }) => `${3 - index}`};
`;

const NumberBackground = styled.div`
  width: 3.8rem;
  height: 3.8rem;

  background-color: #f4d7da;

  border-radius: 100%;
  border: 2px solid var(--White);

  z-index: 5;
`;

const Number = styled.p`
  color: #d25b68;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
`;
