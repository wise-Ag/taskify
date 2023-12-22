import ButtonSet from "@/components/ButtonSet/ButtonSet";
import Button from "@/components/button/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface AlertProps {
  type: "incorrect" | "complete" | "duplicate" | "delete";
}

const AlertModal = ({ type }: AlertProps) => {
  return (
    <Wrapper>
      <Contents>
        {type === "incorrect" && "비밀번호가 일치하지 않습니다."}
        {type === "complete" && "가입이 완료되었습니다!"}
        {type === "duplicate" && "이미 사용 중인 이메일입니다."}
        {type === "delete" && "칼럼의 모든 카드가 삭제됩니다."}
      </Contents>
      <ButtonWrapper>{type === "delete" ? <ButtonSet type="modalSet">삭제</ButtonSet> : <Button type="modalConfirm">확인</Button>}</ButtonWrapper>
    </Wrapper>
  );
};

export default AlertModal;

const Wrapper = styled.div`
  width: 54rem;
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    height: 22rem;
  }
`;

const Contents = styled.div`
  margin-top: 10.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 8.1rem;

    font-size: 1.6rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 4.5rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 5rem;
  }
`;
