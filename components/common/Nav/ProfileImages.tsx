import { useState, MouseEvent, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import NoProfileImage from "@/components/common/NoProfileImage/ProfileImage";
import MemberListDropdown from "@/components/common/Nav/MemberListDropdown";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { activeDropdownAtom } from "@/states/atoms";
import { getMembers } from "@/api/members";
import { useRouter } from "next/router";
import { Member } from "@/api/members/members.types";

const ProfileImages = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useAtom(activeDropdownAtom);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { boardid } = router.query;

  const toggleDropdown = (event: MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === "profileImages" ? null : "profileImages");
  };

  useEffect(() => {
    const closeMenu = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  });

  useEffect(() => {
    if (!boardid) return;
    const loadMembersData = async () => {
      const res = await getMembers({ dashboardId: Number(boardid), token: localStorage.getItem("accessToken") });
      if (res !== null) {
        setMembers(() => [...res.members]);
        setTotalCount(res.totalCount);
      }
    };

    loadMembersData();
  }, [boardid]);

  return (
    <Container ref={dropdownRef}>
      {totalCount > 0 && (
        <Contents>
          {members.slice(0, 4).map((member, index) =>
            member.profileImageUrl ? (
              <ProfileImg key={member.id} $index={index} $image={member.profileImageUrl} />
            ) : (
              <NoProfileImageWrapper key={member.id} $index={index}>
                <NoProfileImage id={member.id} nickname={member.nickname} isBorder={true} />
              </NoProfileImageWrapper>
            ),
          )}
          {totalCount > 4 && (
            <NumberWrapper onClick={toggleDropdown}>
              <NumberBackground />
              <NumberPc>+{totalCount - 4}</NumberPc>
              <NumberTabletOrMobile>+{totalCount - 2}</NumberTabletOrMobile>
            </NumberWrapper>
          )}
        </Contents>
      )}
      {activeDropdown === "profileImages" && <MemberListDropdown members={members} />}
    </Container>
  );
};

export default ProfileImages;

const Container = styled.div``;

const Contents = styled.div`
  min-width: 8rem;
  max-width: 15.8rem;

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

const ProfileImg = styled.div<{ $index: number; $image: string }>`
  width: 3.8rem;
  height: 3.8rem;

  padding: 0;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ $index: index }) => `${(index + 1) * 3}rem`};

  border-radius: 100%;
  border: 2px solid var(--White);

  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;

  z-index: ${({ $index: index }) => `${3 - index}`};

  @media (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

const NoProfileImageWrapper = styled.div<{ $index: number }>`
  width: 3.8rem;
  line-height: 3.4rem;

  padding: 0;

  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ $index: index }) => `${(index + 1) * 3}rem`};

  z-index: ${({ $index: index }) => `${3 - index}`};

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
    width: 3.4rem;
    line-height: 3rem;

    right: ${({ $index: index }) => `${(index + 1) * 2.4}rem`};
  }
`;

const NumberWrapper = styled.div`
  z-index: ${Z_INDEX.ProfileImages_NumberWrapper};

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

    cursor: pointer;

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
