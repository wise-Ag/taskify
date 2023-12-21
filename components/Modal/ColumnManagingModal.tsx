import { useState } from "react";
import styled from "styled-components";
import NameInput from "./NameInput";
import ButtonSet from "../ButtonSet/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";

function ColumnManagingModal() {
  return (
    <ColumnManagingModalWrapper>
      <ColumnManagingTitle>컬럼 관리</ColumnManagingTitle>
      <NameInput titleType="이름" />
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"변경"}</ButtonSet>
      </ButtonWrapper>
    </ColumnManagingModalWrapper>
  );
}

export default ColumnManagingModal;

const ColumnManagingModalWrapper = styled.div`
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

const ColumnManagingTitle = styled.div`
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
