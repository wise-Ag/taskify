import styled from "styled-components";
import Image from "next/image";
import { DeviceSize } from "@/styles/DeviceSize";
import LandingMain from "@/assets/images/landing-main.png";
import Point1 from "@/components/Landing/Point1";
import Point2 from "@/components/Landing/Point2";
import Setting from "@/components/Landing/Setting";

const MainSection = () => {
  return (
    <Container>
      <MainImage src={LandingMain} alt="Landing Main" />
      <Text1>스마트한 할 일 관리</Text1>
      <Text2>위드 플랜</Text2>
      <Description>
        대시보드를 생성해 다양한 프로젝트를 한 곳에서 관리하세요.
        <br />
        할 일 카드를 생성하고 구성원과 함께 소통하며 관리할 수 있습니다.
        <br />
        회사 업무부터 개인 목표 및 모임 활동까지, 할 일 관리는 위드 플랜과 함께!
        <br />
      </Description>
      <Point1 />
      <Point2 />
      <Setting />
    </Container>
  );
};

export default MainSection;

const Container = styled.div`
  padding: 9.4rem 0;

  position: relative;
  top: 7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    top: 6rem;
  }
`;

const MainImage = styled(Image)`
  width: 72.2rem;
  height: 42.2rem;

  border-radius: 10px;

  @media screen and (max-width: ${DeviceSize.tablet}) {
    width: 53.7rem;
    height: 31.4rem;
  }

  @media screen and (max-width: 608px) {
    width: 28.7rem;
    height: 16.8rem;
  }
`;

const Text1 = styled.span`
  margin-top: 4.8rem;

  text-align: center;

  color: var(--Black33);
  font-size: 7.6rem;
  font-weight: 700;

  @media screen and (max-width: ${DeviceSize.tablet}) {
    font-size: 5.6rem;
  }

  @media screen and (max-width: 608px) {
    font-size: 4.2rem;
  }
`;

const Text2 = styled.span`
  text-align: center;

  color: var(--Main);
  font-size: 9rem;
  font-weight: 700;

  @media screen and (max-width: ${DeviceSize.tablet}) {
    font-size: 5.6rem;
  }

  @media screen and (max-width: 608px) {
    font-size: 4.2rem;
  }
`;

const Description = styled.span`
  margin-top: 3rem;
  margin-bottom: 6.6rem;

  text-align: center;

  color: var(--Black33);
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.5rem;

  @media screen and (max-width: 608px) {
    font-size: 1.5rem;
  }
`;
