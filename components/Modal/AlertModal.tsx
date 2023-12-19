import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

interface AlertProps {
  type: "incorrect" | "complete" | "duplicate";
}

function AlertModal({ type }: AlertProps) {
  return (
    <AlertModalWrapper>
      {type === "incorrect" && "비밀번호가 일치하지 않습니다."}
      {type === "complete" && "가입이 완료되었습니다!"}
      {type === "duplicate" && "이미 사용 중인 이메일입니다."}
    </AlertModalWrapper>
  );
}

export default AlertModal;

const AlertModalWrapper = styled.div`
  // position: relative;
  width: 50.8rem;
  height: 22.2rem;

  text-align: center;
  line-height: 22.2rem;

  color: var(--black-black_333236, #333236);
  font-size: 1.8rem;
  font-weight: 500;
`;
