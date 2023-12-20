import AddButton from "@/assets/icons/add-box.svg";
import Crown from "@/assets/icons/crown.svg";
import LogoButton from "@/components/common/LogoButton";
import { DeviceSize } from "@/styles/DeviceSize";
import Image from "next/image";
import styled from "styled-components";
import dashboardData from "./mockData";

interface DashboardProps {
  color: string;
  title: string;
  createdByMe?: boolean;
}

function Dashboard({ color, title, createdByMe }: DashboardProps) {
  return (
    <Container>
      <Color color={color} />
      <DashboardTitle>{title}</DashboardTitle>
      {createdByMe && <StyledCrown alt="왕관" />}
    </Container>
  );
}

function SideMenu() {
  const data = dashboardData.dashboards;

  return (
    <Wrapper>
      <LogoButton />
      <HeaderWrapper>
        <Title>Dash Boards</Title>
        <AddButton alt="추가 버튼" width={20} height={20} />
      </HeaderWrapper>
      <DashboardList>
        {data.map((dashboard, key) => {
          return (
            <div key={key}>
              <Dashboard color={dashboard.color} title={dashboard.title} createdByMe={dashboard.createdByMe} />
            </div>
          );
        })}
      </DashboardList>
    </Wrapper>
  );
}

export default SideMenu;

const Wrapper = styled.div`
  width: 30rem;
  height: 155rem;

  padding: 2rem 2.4rem;

  display: flex;
  flex-direction: column;
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
  margin-top: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 3.9rem;
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

// const AddButton = styled(Image)`
//   width: 2rem;
//   height: 2rem;
// `;

const DashboardList = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-top: 1.8rem;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    margin-top: 2.2rem;
  }
`;

const Container = styled.div`
  width: 27.6rem;
  height: 4.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 13.4rem;
    height: 4.3rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 4rem;
    height: 4rem;

    justify-content: center;
  }
`;

const Color = styled.div<{ color: string }>`
  width: 0.8rem;
  height: 0.8rem;

  margin-right: 1.6rem;

  background-color: ${(props) => props.color};

  border-radius: 100%;
`;

const DashboardTitle = styled.div`
  margin-right: 0.6rem;

  color: var(--Gray78);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-right: 0.4rem;

    font-size: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const StyledCrown = styled(Crown)`
  width: 1.8rem;
  height: 1.4rem;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 1.5rem;
    height: 1.2rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;
