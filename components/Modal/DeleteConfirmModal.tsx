import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ButtonSet from "@/components/ButtonSet/ButtonSet";

function DeleteConfirmModal() {
  return (
    <Wrapper>
      <Contents>{"칼럼의 모든 카드가 삭제됩니다."}</Contents>
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"생성"}</ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default DeleteConfirmModal;

const Wrapper = styled.div`
  width: 54rem;
  height: 25rem;

  position: relative;

  border-radius: 0.8rem;

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
  font-size: 1.8rem;
  font-weight: 500;

  color: var(--Black33);

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.6rem;
    line-height: 22rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 14.4rem;
  bottom: 2.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    right: 2rem;
  }
`;
