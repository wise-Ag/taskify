import { useState } from "react";
import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

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

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 2.4rem;
  }
`;

const NameInputBox = styled.input`
  width: 100%;
  height: 4.8rem;

  outline-color: var(--Grayd9);
  border: 1px solid var(--Grayd9);
  padding: 1.5rem 1.6rem 1.4rem 1.6rem;
  border-radius: 6px;

  font-size: 1.6rem;
  font-weight: 400;

  ::placeholder {
    content: "이름을 입력하세요";

    & :hover {
      outline-color: var(--Grayd9);
    }
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: 4.2rem;

    border-radius: 8px;
  }
`;
const NameInputWrapper = styled.div``;
