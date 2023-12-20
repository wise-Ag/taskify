import styled from "styled-components";

interface NameModalProps {
  titleType: "이름" | "대시보드 이름";
}

function NameInput({ titleType }: NameModalProps) {
  return (
    <NameInputWrapper>
      <NameType>{titleType}</NameType>
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
  width: 48.4rem;
  height: 4.8rem;
  padding: 1.5rem 1.6rem 1.4rem 1.6rem;
  border-radius: 6px;
  font-size: 1.6rem;

  ::placeholder {
    content: "이름을 입력하세요";
    color: var(--Gray30);
  }
`;
const NameInputWrapper = styled.div``;
