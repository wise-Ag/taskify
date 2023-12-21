import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

interface NameModalProps {
  label: "이름" | "대시보드 이름";
}

function NameInput({ label }: NameModalProps) {
  return (
    <Wrapper>
      <NameType>{label}</NameType>
      <NameInputBox placeholder="이름을 입력하세요"></NameInputBox>
    </Wrapper>
  );
}

export default NameInput;

const Wrapper = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

const NameType = styled.label`
  color: var(--Black33);

  font-size: 1.8rem;
  font-weight: 500;
`;

const NameInputBox = styled.input`
  width: 100%;
  height: 4.8rem;

  border: 1px solid var(--Grayd9);
  padding: 1.5rem 1.6rem 1.4rem 1.6rem;
  border-radius: 6px;

  font-size: 1.6rem;
  font-weight: 400;

  &:focus {
    outline: none;
    border-color: var(--Main);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: 4.2rem;

    border-radius: 8px;
  }
`;
