import ButtonSet from "@/components/common/Buttons/ButtonSet";
import ColorSelector from "@/components/common/Chip/DashBoardColor";
import NameInput from "@/components/Modal/NameInput";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface ModalProps {
  title: "새 컬럼 생성" | "컬럼 관리" | "새로운 대시보드";
  label: "이름" | "대시보드 이름";
  buttonType: "생성" | "변경";
  onClose?: () => void;
}

const ModalContainer = ({ title, label, buttonType, onClose }: ModalProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <NameInput label={label} />
      {title === "새로운 대시보드" && (
        <ColorSelectorWrapper>
          <ColorSelector />
        </ColorSelectorWrapper>
      )}
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickCancel={onClose}>
          {buttonType}
        </ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ModalContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 54rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

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

const ColorSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 2.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
