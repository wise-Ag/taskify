import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import Logo from "@/assets/icons/large-logo.svg";
import People from "@/assets/icons/people.svg";
import Button from "@/components/button/Button";
import Lading1 from "@/assets/icons/landing1.svg";
import Lading2 from "@/assets/icons/landing2.svg";

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

const LadingImage1 = styled(Lading1)`
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

const LadingImage2 = styled(Lading2)`
  position: absolute;
  top: 9.8rem;
  left: 10.8rem;
`;

const Text3 = styled(Text1)`
  font-size: 2.8rem;
`;
