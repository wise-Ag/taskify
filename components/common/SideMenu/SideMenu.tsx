import AddButton from "@/assets/icons/add-box.svg";
import Crown from "@/assets/icons/crown.svg";
import LogoButton from "@/components/common/Buttons/LogoButton";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ArrowButton from "@/assets/icons/arrow-forward.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { getDashboardList } from "@/api/dashboards";
import { useAtom } from "jotai";
import { invitationsAtom } from "@/states/atoms";

interface DashboardProps {
  color: string;
  title: string;
  createdByMe?: boolean;
  closePopup?: () => void;
}
export interface Dashboards {
  id: number;
  title: string;
  color: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}

const Dashboard = ({ color, title, createdByMe }: DashboardProps) => {
  return (
    // 질 동작하는지 확인하기 위해 임의로 설정한 경로
    <Container href={"/dashboard"}>
      <Color color={color} />
      <DashboardTitle>{title}</DashboardTitle>
      {createdByMe && <StyledCrown alt="왕관" />}
    </Container>
  );
};

const SideMenu = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cursorId, setCursorId] = useState(1);
  const [dashboards, setDashboards] = useState<Dashboards[]>([]);
  const [invitations] = useAtom(invitationsAtom); // 초대 목록!!

  useEffect(() => {
    const loadDashboardList = async () => {
      const res = await getDashboardList({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJ0ZWFtSWQiOiIxLTA4IiwiaWF0IjoxNzAzNzQ4NDU5LCJpc3MiOiJzcC10YXNraWZ5In0.WYQWWikKqILh4vWyiDSCs0HDO-3TvKg7ci19-NUVexk",
        navigationMethod: "infiniteScroll",
      });
      if (res && res.dashboards) {
        setDashboards(res.dashboards); // 로드한 데이터를 상태에 저장
      }
    };
    loadDashboardList();
  }, [invitations]);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <Wrapper>
      <LogoButton />
      <StyledArrowButton onClick={togglePopup} $isPopupVisible={isPopupVisible} />
      {isPopupVisible && (
        <Popup>
          <DashboardList>
            {dashboards.map((dashboard, key) => {
              return <Dashboard key={key} color={dashboard.color} title={dashboard.title} createdByMe={dashboard.createdByMe} />;
            })}
          </DashboardList>
        </Popup>
      )}
      <HeaderWrapper>
        <Title>Dash Boards</Title>
        <StyledAddButton alt="추가 버튼" width={20} height={20} />
      </HeaderWrapper>
      <DashboardList>
        {dashboards.map((dashboard, key) => {
          return <Dashboard key={key} color={dashboard.color} title={dashboard.title} createdByMe={dashboard.createdByMe} />;
        })}
      </DashboardList>
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
  width: 30rem;
  height: 155rem;
  /* height: 100vh; */

  padding: 2rem 1.2rem;

  border-right: 1px solid var(--Grayd9);

  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  background-color: var(--MainBG);

  z-index: ${Z_INDEX.SideMenu_Wrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    width: 16rem;
    height: 166.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 6.7rem;
    height: 185.9rem;
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
  width: 27.6rem;

  margin-top: 1.8rem;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 13.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 4rem;

    margin-top: 1.6rem;
  }
`;

const Container = styled(Link)`
  height: 4.5rem;

  padding-left: 1.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.4rem;

  &:hover {
    background-color: var(--MainHover);
  }

  @media (max-width: ${DeviceSize.tablet}) {
    height: 4.3rem;

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
  margin-right: 0.6rem;

  color: var(--Gray78);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.tablet}) {
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

const Popup = styled.div`
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

    ${DashboardList} {
      width: 13.4rem;

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
