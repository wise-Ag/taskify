import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

interface AlertProps {
  type: "incorrect" | "complete" | "duplicate";
}

function AlertModal({ type }: AlertProps) {
  return (
    <AlertModalWrapper>
      <AlertModalContents>
        {type === "incorrect" && "비밀번호가 일치하지 않습니다."}
        {type === "complete" && "가입이 완료되었습니다!"}
        {type === "duplicate" && "이미 사용 중인 이메일입니다."}
      </AlertModalContents>
    </AlertModalWrapper>
  );
}

export default AlertModal;

const AlertModalWrapper = styled.div`
  position: relative;
  width: 54rem;
  height: 25rem;
  border-radius: 0.8rem;
  background: var(--White);
`;

const AlertModalContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  line-height: 25rem;
  color: var(--Black20);
  font-size: 1.8rem;
  font-weight: 500;
`;
