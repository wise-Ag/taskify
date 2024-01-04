import AddButton from "@/assets/icons/add-box.svg";
import Crown from "@/assets/icons/crown.svg";
import LogoButton from "@/components/common/Buttons/LogoButton";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ArrowButton from "@/assets/icons/arrow-forward.svg";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { getDashboardList } from "@/api/dashboards";
import { useAtom } from "jotai";
import { invitationsAtom } from "@/states/atoms";
import { Dashboard } from "@/api/dashboards/dashboards.types";
import { useModal } from "@/hooks/useModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import ModalContainer from "@/components/Modal/ModalContainer";
import { useParams } from "next/navigation";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useInfiniteScrollNavigator } from "@/hooks/useInfiniteScrollNavigator";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { useRouter } from "next/router";
import { dashboardListAtom } from "@/states/atoms";

interface DashboardProps {
  boardId: number;
  color: string;
  title: string;
  createdByMe?: boolean;
  closePopup?: () => void;
}

const PAGE_SIZE = 2;

const Dashboard = ({ color, title, createdByMe, boardId }: DashboardProps) => {
  // const param = useParams();
  const router = useRouter();
  const { boardid } = router.query;
  const isActive = boardId === Number(boardid);

  return (
    <Container href={`/dashboard/${boardId}`} $isActive={isActive}>
      <Color color={color} />
      <DashboardTitle>{title}</DashboardTitle>
      {createdByMe && <StyledCrown alt="왕관" />}
    </Container>
  );
};

const SideMenu = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const [cursorId, setCursorId] = useState<number | null>(null);
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [invitations, setInvitations] = useAtom(invitationsAtom); // 초대 목록!!
  const [editDashboard, setEditDashboard] = useAtom(dashboardListAtom);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); //스크롤바 커스텀

  const scrollContainerRef = useRef(null);
  const { startRef, endRef, handleScrollNavClick, isScrollingUp } = useInfiniteScrollNavigator(scrollContainerRef);

  const handleClickOutside = (event: { target: string }) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const loadDashboardList = async () => {
      const res = await getDashboardList({
        token: localStorage.getItem("accessToken"),
        size: 500,
        navigationMethod: "infiniteScroll",
      });
      if (res && res.dashboards) {
        setDashboards(...[res.dashboards]);
      }
    };
    loadDashboardList();
  }, [editDashboard, invitations]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Wrapper>
      <LogoButton />
      <StyledArrowButton onClick={togglePopup} $isPopupVisible={isPopupVisible} />
      {isPopupVisible && (
        <Popup $isPopupVisible={isPopupVisible}>
          <DashboardList>
            {dashboards.map((dashboard) => {
              return <Dashboard key={dashboard.id} color={dashboard.color} title={dashboard.title} createdByMe={dashboard.createdByMe} boardId={dashboard.id} />;
            })}
          </DashboardList>
        </Popup>
      )}
      <HeaderWrapper ref={startRef}>
        <Title>Dash Boards</Title>
        <StyledAddButton
          alt="추가 버튼"
          width={20}
          height={20}
          onClick={() => {
            openModalFunc();
          }}
        />
      </HeaderWrapper>
      <DashboardList>
        {dashboards.map((dashboard) => {
          return (
            <div key={dashboard.id}>
              <Dashboard color={dashboard.color} title={dashboard.title} createdByMe={dashboard.createdByMe} boardId={dashboard.id} />
              {/* {cursorId == dashboard.id && <div ref={targetRef}>얍뽕짠</div>} */}
            </div>
          );
        })}
      </DashboardList>
      {isModalOpen && (
        <ModalWrapper>
          <ModalContainer title="새로운 대시보드" label="대시보드 이름" buttonType="생성" onClose={closeModalFunc} />
        </ModalWrapper>
      )}
      <div ref={endRef} />
      {/* {dashboards.length > 17 && (
        <ScrollNavigateButton onClick={() => handleScrollNavClick()}>
          <ScrollNavigateIcon $isScrollingUp={isScrollingUp} />
        </ScrollNavigateButton>
      )} */}
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
  width: 30rem;
  height: 100vh;

  padding: 2rem 1.2rem;

  border-right: 1px solid var(--Grayd9);

  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  background-color: var(--MainBG);

  z-index: ${Z_INDEX.SideMenu_Wrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    width: 16rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 6.7rem;
  }
`;

const HeaderWrapper = styled.div`
  margin: 5rem 1.2rem 0;

  display: flex;
  align-items: center;
  gap: 16rem;

  @media (max-width: ${DeviceSize.tablet}) {
    justify-content: center;
    gap: 2.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 2.5rem;
  }
`;

const Title = styled.div`
  color: var(--Gray78);
  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledAddButton = styled(AddButton)`
  cursor: pointer;
`;

const DashboardList = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: hidden;

  margin-top: 1.8rem;

  display: flex;
  flex-direction: column;

  &:hover {
    overflow-y: auto;
  }

  @media (max-width: ${DeviceSize.tablet}) {
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 4rem;
    max-height: 70rem;

    margin-top: 1.6rem;
  }
`;

const Container = styled(Link)<{ $isActive: boolean }>`
  width: 100%;
  height: 4.5rem;

  padding-left: 1.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.4rem;
  background: ${({ $isActive }) => ($isActive ? `var(--MainHover)` : "")};

  &:hover {
    background-color: var(--MainHover);
  }

  @media (max-width: ${DeviceSize.tablet}) {
    height: 4.3rem;
    width: 100%;
    padding-left: 1rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 4rem;

    padding-left: 0;

    justify-content: center;
  }
`;

const Color = styled.div<{ color: string }>`
  width: 0.8rem;
  height: 0.8rem;

  margin-right: 1.6rem;

  background-color: ${(props) => props.color};

  border-radius: 100%;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-right: 0;
  }
`;

const DashboardTitle = styled.div`
  width: 80%;
  margin-right: 0.6rem;

  color: var(--Gray78);
  font-size: 1.8rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;

  &:hover {
    text-overflow: clip;
    overflow: auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    width: 55%;
    font-size: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledCrown = styled(Crown)`
  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledArrowButton = styled(ArrowButton)<{ $isPopupVisible: boolean }>`
  display: none;

  ${(props) => props.$isPopupVisible && " transform: scaleX(-1)"};

  @media (max-width: ${DeviceSize.mobile}) {
    width: 2rem;
    height: 2rem;

    display: block;

    margin-top: 3.9rem;

    cursor: pointer;
  }
`;

const Popup = styled.div<{ $isPopupVisible: boolean }>`
  padding: 0.5rem;
  display: none;

  position: absolute;
  top: 15.7rem;
  left: 8rem;

  border: 1px solid var(--Grayd9);
  border-radius: 4px;

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  z-index: ${Z_INDEX.SideMenu_Popup};

  @media (max-width: ${DeviceSize.mobile}) {
    display: block;
    opacity: ${({ $isPopupVisible }) => ($isPopupVisible ? 1 : 0)};
    transition: opacity 0.3s ease;

    ${DashboardList} {
      width: 18rem;

      margin: 0.8rem 0;
    }

    ${Container} {
      justify-content: flex-start;

      &:hover {
        background-color: var(--MainBG);
      }
    }

    ${Color} {
      margin-left: 1rem;
      margin-right: 1.6rem;
    }

    ${DashboardTitle} {
      display: block;

      margin-right: 0.6rem;
    }

    ${StyledCrown} {
      display: block;
    }
  }
`;

const ScrollNavigateButton = styled.div`
  position: sticky;
  bottom: 0;
  left: 100rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border-radius: 1.5rem;

  cursor: pointer;

  background-color: var(--MainHover);
`;

const ScrollNavigateIcon = styled(FaArrowUpWideShort)<{ $isScrollingUp: boolean }>`
  width: 2.5rem;
  height: 2.5rem;

  ${(props) => props.$isScrollingUp && " transform: scaleY(-1)"};

  fill: var(--Main);
`;
