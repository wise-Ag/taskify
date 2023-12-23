import AddButton from "@/assets/icons/add-box.svg";
import Crown from "@/assets/icons/crown.svg";
import LogoButton from "@/components/common/LogoButton";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import dashboardData from "./mockData";
import ArrowButton from "@/assets/icons/arrow-forward.svg";
import { useState } from "react";
import Link from "next/link";

interface DashboardProps {
  color: string;
  title: string;
  createdByMe?: boolean;
  closePopup?: () => void;
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
  const data = dashboardData.dashboards;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
            {data.map((dashboard, key) => {
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
        {data.map((dashboard, key) => {
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

  padding: 2rem 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  border-right: 1px solid var(--Grayd9);

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
    background-color: var(--MainBG);
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

  z-index: 999;

  @media (max-width: ${DeviceSize.mobile}) {
    display: block;

    ${DashboardList} {
      width: 13.4rem;

      margin: 0.8rem 0;
    }

    ${Container} {
      justify-content: flex-start;
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
