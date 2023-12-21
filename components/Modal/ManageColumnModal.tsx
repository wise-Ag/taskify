import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ButtonSet from "@/components/ButtonSet/ButtonSet";
import NameInput from "./NameInput";

function ManageColumnModal() {
  return (
    <Wrapper>
      <Title>컬럼 관리</Title>
      <NameInput label="이름" />
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"변경"}</ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ManageColumnModal;

const Wrapper = styled.div`
  width: 54rem;
  height: 27.6rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  position: relative;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;

    padding: 2.8rem 2rem 2.8rem 2rem;

    border-radius: 8px;
  }
`;

const Title = styled.div`
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
