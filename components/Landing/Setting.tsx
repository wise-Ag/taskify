import styled, { css } from "styled-components";
import Image from "next/image";
import { DeviceSize } from "@/styles/DeviceSize";
import Landing3 from "@/assets/images/landing3.png";
import Landing4 from "@/assets/images/landing4.png";
import Landing5 from "@/assets/images/landing5.png";

const Setting = () => {
  return (
    <>
      <Title>생산성을 높이는 다양한 설정 ⚡</Title>
      <Container>
        <Box>
          <ImageSection>
            <Image3 src={Landing3} alt="Landing3" width={323} height={133} />
          </ImageSection>
          <TextSection>
            <Text>대시보드 & 상태 관리</Text>
            <Description>대시보드와 컬럼을 목적에 맞게 관리하세요.</Description>
          </TextSection>
        </Box>
        <Box>
          <ImageSection>
            <Image4 src={Landing4} alt="Landing4" width={323} height={175} />
          </ImageSection>
          <TextSection>
            <Text>할 일 기록</Text>
            <Description>세부사항과 함께 할 일을 구체적으로 기록하세요.</Description>
          </TextSection>
        </Box>
        <Box>
          <ImageSection>
            <Image5 src={Landing5} alt="Landing5" width={323} height={210} />
          </ImageSection>
          <TextSection>
            <Text>구성원 관리</Text>
            <Description>대시보드별 구성원을 편리하게 관리하세요.</Description>
          </TextSection>
        </Box>
      </Container>
    </>
  );
};

export default Setting;

const Title = styled.h3`
  margin-bottom: 3.2rem;

  color: var(--Black4b);
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 608px) {
    font-size: 2.2rem;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1240px) {
    display: flex;
    justify-content: center;
    gap: 3.3rem;
  }
`;

const Box = styled.div`
  @media screen and (min-width: ${DeviceSize.tablet}) {
  }
`;

const ImageSection = styled.div`
  width: 37.8rem;
  height: 28rem;

  position: relative;

  border-radius: 8px 8px 0px 0px;

  background: var(--Main);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 34.3rem;
    height: 25.5rem;
  }
`;

const TextSection = styled.div`
  width: 37.8rem;
  height: 12.4rem;

  position: relative;

  border-radius: 0px 0px 8px 8px;

  background: var(--Black33);

  @media screen and (max-width: 1240px) {
    margin-bottom: 4.8rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 34.3rem;
    height: 11.2rem;

    margin-bottom: 4rem;
  }
`;

const Text = styled.h3`
  position: absolute;
  top: 3.3rem;
  left: 3.2rem;

  color: var(--White);
  font-size: 1.8rem;
  font-weight: 700;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    position: absolute;
    top: 2.7rem;
    left: 3.2rem;
  }
`;

const Description = styled.h3`
  position: absolute;
  top: 7.2rem;
  left: 3.2rem;

  color: var(--White);
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    position: absolute;
    top: 6.6rem;
    left: 3.2rem;
  }
`;

const commonStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image3 = styled(Image)`
  ${commonStyles}

  width: 32.3rem;
  height: 14rem;

  border-radius: 8px;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 30.3rem;
    height: 13.1rem;
  }
`;

const Image4 = styled(Image)`
  ${commonStyles}

  width: 32.3rem;
  height: 18.9rem;

  border-radius: 8px;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 30.3rem;
    height: 17.7rem;
  }
`;

const Image5 = styled(Image)`
  ${commonStyles}

  width: 32.3rem;
  height: 22.7rem;

  border-radius: 8px;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 30.3rem;
    height: 21.3rem;
  }
`;
