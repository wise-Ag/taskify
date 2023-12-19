import styled from "styled-components";
import ColorSelector from "@/components/Chip/DashBoardColor";
import NameInput from "./NameInput";

function NewDashBoardModal() {
  return (
    <NewDashBoardModalWrapper>
      <NewDashBoardTitle>새로운 대시보드</NewDashBoardTitle>
      {/* <DashBoardName>대시보드 이름</DashBoardName> */}
      {/* <DashBoardInputWrapper> */}
      <NameInput titleType="이름" />
      {/* </DashBoardInputWrapper> */}
      <ColorSelectorWrapper>
        <ColorSelector />
      </ColorSelectorWrapper>
      <ButtonWrapper>버튼버튼</ButtonWrapper>
    </NewDashBoardModalWrapper>
  );
}

export default NewDashBoardModal;

const NewDashBoardModalWrapper = styled.div`
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  width: 540px;
  height: 334px;
  position: relative;
  border-radius: 8px;
  background: var(--White);
`;

const NewDashBoardTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;

// const DashBoardName = styled.div``;

// const DashBoardInputWrapper = styled.div`
//   width: 48.4rem;
//   height: 4.8rem;
//   border: 1px solid var(--Gray30);
// `;

const ColorSelectorWrapper = styled.div`
  margin-top: 2.8rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 2.8rem;
  bottom: 2.8rem;
  border: 1px solid var(--Gray30);
`;
