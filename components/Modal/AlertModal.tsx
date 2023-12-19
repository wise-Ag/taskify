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

const AlertModalContents = styled.div`
  // position: relative;
  width: 50.8rem;
  height: 22.2rem;
  border-radius: 8px;
  text-align: center;
  line-height: 22.2rem;
  color: var(--Black20);
  font-size: 1.8rem;
  font-weight: 500;
`;

const AlertModalWrapper = styled.div`
  padding: 3.2rem 2.8rem;
  border-radius: 0.8rem;
  background: var(--White);
`;
