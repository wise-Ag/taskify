import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import NoInviteIcon from "@/assets/icons/unsubscribe-envelop.png";

const NoInvitation = () => {
  return (
    <Container>
      <Title>초대받은 대시보드</Title>
      <Wrapper>
        <NoInviteImg />
        <Message>아직 초대받은 대시보드가 없어요</Message>
      </Wrapper>
    </Container>
  );
};

export default NoInvitation;

const Container = styled.div`
  max-width: 102rem;
  height: 40rem;

  padding: 3.2rem 2.8rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background: var(--White);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    max-width: 40rem;

    padding: 2.4rem 1.6rem;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 6.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    margin-top: 12em;
  }
`;

const NoInviteImg = styled.img.attrs({
  src: NoInviteIcon.src,
})`
  width: 10rem;
  height: 10rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 6rem;
    height: 6rem;
  }
`;

const Message = styled.p`
  color: var(--Gray9f);
  font-size: 1.8rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
