import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import Logo from "@/assets/icons/large-logo.svg";
import People from "@/assets/icons/people.svg";
import Button from "@/components/button/Button";
import Landing1 from "@/assets/images/landing1.svg";
import Landing2 from "@/assets/images/landing2.svg";
import Landing3 from "@/assets/images/landing3.svg";
import Landing4 from "@/assets/images/landing4.svg";
import Landing5 from "@/assets/images/landing5.svg";

function MainSection() {
  return (
    <Container>
      <MainImage>
        <MainLogo />
        <PeopleIcon />
      </MainImage>
      <Title>
        새로운 일정 관리<Text>Taskify</Text>
      </Title>
      <Description>서비스의 메인 설명 들어갑니다.</Description>
      <Button type="login">로그인</Button>
      <Box>
        <Point1>Point 1</Point1>
        <Text1>일의 우선순위를 관리하세요</Text1>
        <LadingImage1 />
      </Box>
      <Box>
        <Point2>Point 1</Point2>
        <Text2>해야 할 일을 등록하세요.</Text2>
        <LadingImage2 />
      </Box>
      <Text3>생산성을 높이는 다양한 설정 ⚡</Text3>
      <Setting>
        <SettingBox>
          <Background>
            <StyledLanding3 />
          </Background>
          <Bottom>
            <BottomText>대시보드 설정</BottomText>
            <BottomDescription>대시보드 사진과 이름을 변경할 수 있어요</BottomDescription>
          </Bottom>
        </SettingBox>
        <SettingBox>
          <Background>
            <StyledLanding4 />
          </Background>
          <Bottom>
            <BottomText>대시보드 설정</BottomText>
            <BottomDescription>대시보드 사진과 이름을 변경할 수 있어요</BottomDescription>
          </Bottom>
        </SettingBox>
        <SettingBox>
          <Background>
            <StyledLanding5 />
          </Background>
          <Bottom>
            <BottomText>대시보드 설정</BottomText>
            <BottomDescription>대시보드 사진과 이름을 변경할 수 있어요</BottomDescription>
          </Bottom>
        </SettingBox>
      </Setting>
    </Container>
  );
}

export default MainSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--MainLight);
`;

const MainImage = styled.div`
  width: 72.2rem;
  height: 42.2rem;

  position: relative;

  border-radius: 8px;
  background: var(--Main);
`;

const MainLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  color: var(--White);
`;

const PeopleIcon = styled(People)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.h3`
  margin-bottom: 2.4rem;

  color: var(--White);
  text-align: center;
  font-size: 7.6rem;
  font-weight: 700;
`;

const Text = styled.span`
  color: var(--Main);
  text-align: center;
  font-size: 9rem;
  font-weight: 700;
`;

const Description = styled.span`
  margin-bottom: 6.6rem;

  color: var(--White);
  font-size: 1.8rem;
  font-weight: 400;
`;

const Box = styled.div`
  width: 120rem;
  height: 60rem;

  margin-bottom: 9rem;

  position: relative;

  border-radius: 8px;
  background: var(--Black17);
`;

const Point1 = styled.h3`
  position: absolute;
  top: 12.3rem;
  left: 6rem;

  color: var(--Gray9f);
  font-size: 2.2rem;
  font-weight: 500;
`;

const Text1 = styled.h3`
  position: absolute;
  top: 24.9rem;
  left: 6rem;

  color: var(--White);
  font-size: 4.8rem;
  font-weight: 700;
`;

const LadingImage1 = styled(Landing1)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Point2 = styled(Point1)`
  top: 12.3rem;
  left: 64.4rem;
`;

const Text2 = styled(Text1)`
  top: 24.9rem;
  left: 64.4rem;
`;

const LadingImage2 = styled(Landing2)`
  position: absolute;
  top: 9.8rem;
  left: 10.8rem;
`;

const Text3 = styled.h3`
  margin-bottom: 3.2rem;

  color: var(--White);
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center; //태블릿 모바일에서만, pc에서는 전체 div 위드주기

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 2.2rem;
  }
`;

const Setting = styled.div`
  @media screen and (min-width: ${DeviceSize.pc}) {
    display: flex;
    justify-content: center;
    gap: 3.3rem;
  }
`;
const SettingBox = styled.div`
  @media screen and (min-width: ${DeviceSize.tablet}) {
  }
`;

const Background = styled.div`
  width: 37.8rem;
  height: 26rem;

  position: relative;

  border-radius: 8px 8px 0px 0px;

  background: var(--Black4b);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 34.3rem;
    height: 23.5rem;
  }
`;

const commonStyles = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLanding3 = styled(Landing3)`
  ${commonStyles}
`;

const StyledLanding4 = styled(Landing4)`
  ${commonStyles}
`;

const StyledLanding5 = styled(Landing5)`
  ${commonStyles}
`;

const Bottom = styled.div`
  width: 37.8rem;
  height: 12.4rem;

  position: relative;

  border-radius: 0px 0px 8px 8px;

  background: var(--Black17);

  @media screen and (max-width: ${DeviceSize.pc}) {
    margin-bottom: 4.8rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 34.3rem;
    height: 11.2rem;

    margin-bottom: 4rem;
  }
`;

const BottomText = styled.h3`
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

const BottomDescription = styled(BottomText)`
  position: absolute;
  top: 7.2rem;
  left: 3.2rem;

  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    position: absolute;
    top: 6.6rem;
    left: 3.2rem;
  }
`;
