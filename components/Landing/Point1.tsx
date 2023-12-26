import styled from "styled-components";
import Image from "next/image";
import { DeviceSize } from "@/styles/DeviceSize";
import Landing1 from "@/assets/images/landing1.png";

const Point1 = () => {
  return (
    <Box>
      <Title>Point 1</Title>
      <Description>
        일의 우선순위를
        <br /> 관리하세요
      </Description>
      <LandingImage src={Landing1} alt="Landing Main" />
    </Box>
  );
};

export default Point1;

const Box = styled.div`
  width: 120rem;
  height: 60rem;

  margin-bottom: 9rem;
  border-radius: 8px;

  position: relative;

  background: var(--Main);

  @media screen and (max-width: 1240px) {
    width: 95%;
    height: 60rem;
  }

  @media screen and (max-width: 1060px) {
    width: 95%;
    height: 85rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 608px) {
    width: 95%;
    height: 54.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h3`
  position: absolute;
  left: 6rem;
  top: 12.3rem;

  color: var(--MainLight);
  font-size: 2.2rem;
  font-weight: 500;

  @media screen and (max-width: 1060px) {
    left: 6rem;
    top: 6.3rem;
  }

  @media screen and (max-width: 608px) {
    left: 50%;
    top: 6.3rem;
    transform: translate(-50%);

    font-size: 1.8rem;
  }
`;

const Description = styled.h3`
  position: absolute;
  left: 6rem;
  top: 24.9rem;

  color: var(--White);
  font-size: 4.8rem;
  font-weight: 700;

  @media screen and (max-width: 1060px) {
    left: 6rem;
    top: 18.9rem;
  }

  @media screen and (max-width: 608px) {
    width: 30rem;

    left: 50%;
    top: 14rem;
    transform: translate(-50%);

    font-size: 3.6rem;
    text-align: center;
  }
`;

const LandingImage = styled(Image)`
  width: 59.4rem;
  height: 49.7rem;

  position: absolute;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 1060px) {
    width: 51.9rem;
    height: 43.5rem;
  }

  @media screen and (max-width: 608px) {
    width: 29.6em;
    height: 24.8rem;
  }
`;
