import styled from "styled-components";

interface NameModalProps {
  // titleType: "name" | "dashBoardName";
  titleType: "이름" | "대시보드 이름";
}

function NameInput({ titleType }: NameModalProps) {
  return (
    <NameInputWrapper>
      <NameType>
        {/* {titleType === "name" && "이름"}
        {titleType === "dashBoardName" && "대시보드 이름"} */}
        {titleType}
      </NameType>
      <NameInputBox placeholder="이름을 입력하세요"></NameInputBox>
    </NameInputWrapper>
  );
}

export default NameInput;

const NameType = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
`;
const NameInputBox = styled.input`
  width: 484px;
  height: 48px;
  padding: 15px 16px 14px 16px;
  border-radius: 6px;
  font-size: 16px;
  ::placeholder {
    content: "이름을 입력하세요";
    color: var(--Gray30);
  }
`;
const NameInputWrapper = styled.div``;
