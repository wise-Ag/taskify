import Button from "@/components/button/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface AlertProps {
  type: "incorrect" | "complete" | "duplicate";
}

function AlertModal({ type }: AlertProps) {
  return (
    <Wrapper>
      <Contents>
        {type === "incorrect" && "비밀번호가 일치하지 않습니다."}
        {type === "complete" && "가입이 완료되었습니다!"}
        {type === "duplicate" && "이미 사용 중인 이메일입니다."}
      </Contents>
      <ButtonWrapper>
        <Button type="modalConfirm">확인</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default AlertModal;

const Wrapper = styled.div`
  width: 54rem;
  height: 25rem;

  position: relative;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    height: 22rem;
  }
`;

const Contents = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  text-align: center;
  line-height: 25rem;
  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.6rem;
    line-height: 22rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 21rem;
  bottom: 2.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    right: 9.45rem;
  }
`;
