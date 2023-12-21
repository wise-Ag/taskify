import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "../ButtonSet/ButtonSet";

function DeleteConfirmModal() {
  return (
    <DeleteConfirmWrapper>
      <DeleteConfirmContents>{"칼럼의 모든 카드가 삭제됩니다."}</DeleteConfirmContents>
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"생성"}</ButtonSet>
      </ButtonWrapper>
    </DeleteConfirmWrapper>
  );
}

export default DeleteConfirmModal;

const DeleteConfirmWrapper = styled.div`
  position: relative;
  width: 54rem;
  height: 25rem;
  border-radius: 0.8rem;
  background: var(--White);
  position: relative;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    height: 22rem;
  }
`;

const DeleteConfirmContents = styled.div`
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

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.6rem;
    line-height: 22rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 2.8rem;
  bottom: 2.8rem;
  border: 1px solid var(--Gray30);

  @media (max-width: ${DeviceSize.mobile}) {
    right: 2rem;
    bottom: 2.8rem;
  }
`;
