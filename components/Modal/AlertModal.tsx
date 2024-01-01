import ButtonSet from "@/components/common/Buttons/ButtonSet";
import Button from "@/components/common/Buttons/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface AlertProps {
  type: "signupComplete" | "deleteColumn" | "confirm" | "cancel" | "passwordChangeComplete" | "profileChangeComplete" | "invalid";
  onClick?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const AlertModal = ({ type, onClick, onCancel, onConfirm }: AlertProps) => {
  return (
    <Wrapper>
      <Contents>
        {type === "signupComplete" && "가입이 완료되었습니다!"}
        {type === "deleteColumn" && "칼럼을 삭제하시겠습니까?"}
        {type === "confirm" && "정말 삭제하시겠습니까?"}
        {type === "cancel" && "요청이 취소됩니다."}
        {type === "passwordChangeComplete" && "비밀번호 변경이 완료되었습니다!"}
        {type === "profileChangeComplete" && "프로필 변경이 완료되었습니다!"}
        {type === "invalid" && "존재하지 않는 유저입니다!"}
      </Contents>
      <ButtonWrapper>
        {type === "deleteColumn" || type === "confirm" ? (
          <ButtonSet type="modalSet" onClickLeft={onCancel} onClickRight={onConfirm}>
            삭제
          </ButtonSet>
        ) : (
          <Button onClick={onClick} type="modalConfirm">
            확인
          </Button>
        )}
      </ButtonWrapper>
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
