import styled from "styled-components";
import Image from "next/image";
import Landing2 from "@/assets/images/landing2.png";

const Point1 = () => {
  return (
    <Box>
      <Title>Point 2</Title>
      <Description>
        해야 할 일을
        <br /> 등록하세요
      </Description>
      <LandingImage src={Landing2} alt="Landing Main" width={436} height={502} />
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
  left: 64.4rem;
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
  top: 24.9rem;
  left: 64.4rem;

  color: var(--White);
  font-size: 4.8rem;
  font-weight: 700;

  @media screen and (max-width: 1060px) {
    top: 18.9rem;
    left: 6rem;
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
  width: 43.6rem;
  height: 50.2rem;

  position: absolute;
  top: 9.8rem;
  left: 10.8rem;

  @media screen and (max-width: 1060px) {
    width: 36rem;
    height: 41.5rem;

    top: unset;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
  }

  @media screen and (max-width: 608px) {
    width: 21.7em;
    height: 25rem;

    top: unset;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
  }
`;
