import { getUsers } from "@/api/users";
import { UserData } from "@/api/users/users.types";
import ArrowIcon from "@/assets/icons/arrow-drop-down.svg";
import NoProfileImage from "@/components/common/NoProfileImage/ProfileImage";
import { activeDropdownAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { FaHome, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import styled from "styled-components";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserData>();
  const [activeDropdown, setActiveDropdown] = useAtom(activeDropdownAtom);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleKebabMenu = (event: MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === "profile" ? null : "profile");
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const loadUserData = async () => {
      const res = await getUsers({ token: localStorage.getItem("accessToken") });
      if (res !== null) setUser({ ...res });
    };

    loadUserData();

    const closeMenu = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      {user && (
        <Wrapper onClick={toggleKebabMenu} ref={dropdownRef}>
          {user.profileImageUrl ? (
            <ProfileIcon image={user.profileImageUrl} />
          ) : (
            <NoProfileImageWrapper>
              <NoProfileImage id={user.id} nickname={user.nickname} isBorder={true} />
            </NoProfileImageWrapper>
          )}
          <Name>{user?.nickname}</Name>
          <StyledArrowIcon $active={activeDropdown === "profile"} onClick={toggleKebabMenu} />
          {activeDropdown === "profile" && (
            <DropdownMenu>
              <MenuItem onClick={() => navigateTo("/mydashboard")}>
                <ItemContent>
                  <FaHome />
                  <span>홈</span>
                </ItemContent>
              </MenuItem>
              <MenuItem onClick={() => navigateTo("/mypage")}>
                <ItemContent>
                  <FaUserCog />
                  <span>계정 관리</span>
                </ItemContent>
              </MenuItem>
              <MenuItem onClick={() => navigateTo("/")}>
                <ItemContent>
                  <FaSignOutAlt />
                  <span>로그아웃</span>
                </ItemContent>
              </MenuItem>
            </DropdownMenu>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Profile;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;
`;

const ProfileIcon = styled.div<{ image: string }>`
  width: 3.8rem;
  height: 3.8rem;

  border-radius: 100%;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;
    height: 3.4rem;
  }
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
  line-height: 3.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 3.4rem;

    font-size: 1.4rem;
    line-height: 3rem;
  }
`;

const DropdownMenu = styled.div`
  width: 21rem;

  border: 1px solid var(--Grayd9);
  border-radius: 16px;

  position: absolute;
  top: 130%;
  right: 0;

  display: flex;
  flex-direction: column;
  background-color: var(--White);

  background: var(--White);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  z-index: ${Z_INDEX.Profile_DropdownMenu};
`;

const MenuItem = styled.div`
  padding: 1.8rem;

  position: relative;

  display: flex;
  align-items: center;

  color: var(--Black33);
  font-size: 1.6rem;
  font-weight: 400;

  cursor: pointer;

  &:hover {
    border-radius: 16px;

    background-color: #eef2e6;

    box-shadow: 0 0 0 6px white inset;
  }
`;

const ItemContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  transform: ${({ active }) => (active ? "scaleY(-1)" : "none")};
`;
