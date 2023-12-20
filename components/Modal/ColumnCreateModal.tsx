import { useState } from "react";
import styled from "styled-components";
import NameInput from "./NameInput";
import ButtonSet from "../ButtonSet/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import DeleteConfirmModal from "./DeleteConfirmModal";

function ColumnCreateModal() {
  return (
    <ColumnCreateModalWrapper>
      <ColumnCreateTitle>새 컬럼 생성</ColumnCreateTitle>
      <NameInput titleType="이름" />
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"생성"}</ButtonSet>
      </ButtonWrapper>
    </ColumnCreateModalWrapper>
  );
}

export default ColumnCreateModal;

const ColumnCreateModalWrapper = styled.div`
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  width: 540px;
  height: 334px;
  position: relative;
  border-radius: 8px;
  background: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 2.8rem 2rem 2.8rem 2rem;
    width: 32.7rem;
    height: 29.3rem;
    border-radius: 8px;
  }
`;

const ColumnCreateTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const DeleteWrapper = styled.div`
  margin-top: 2.8rem;
  cursor: pointer;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 2.4rem;
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
