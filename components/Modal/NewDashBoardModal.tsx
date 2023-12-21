import ButtonSet from "@/components/ButtonSet/ButtonSet";
import ColorSelector from "@/components/Chip/DashBoardColor";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import NameInput from "./NameInput";

function NewDashBoardModal() {
  return (
    <Wrapper>
      <NewDashBoardTitle>새로운 대시보드</NewDashBoardTitle>
      <NameInput label="대시보드 이름" />
      <ColorSelector />
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"생성"}</ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default NewDashBoardModal;

const Wrapper = styled.div`
  width: 54rem;
  height: 33.4rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  position: relative;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    height: 29.3rem;

    padding: 2.8rem 2rem 2.8rem 2rem;
  }
`;

const NewDashBoardTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 2.8rem;
  bottom: 2.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    right: 2rem;
    bottom: 2.8rem;
  }
`;
