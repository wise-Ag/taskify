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
      <Text1>새로운 일정 관리</Text1>
      <Text2>With Plan</Text2>
      <Description>서비스의 메인 설명 들어갑니당 뭐라고 적으까~</Description>
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
  margin-bottom: 6.6rem;

  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 400;

  @media screen and (max-width: 608px) {
    font-size: 1.2rem;
  }
`;
