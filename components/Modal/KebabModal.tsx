import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import { useState, useEffect } from "react";
import TodoModal from "@/components/Modal/TodoModal";
import AlertModal from "@/components/Modal/AlertModal";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useModal } from "@/hooks/useModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";

const KebabModal = () => {
  const { isModalOpen: isDeleteModalOpen, openModalFunc: openDeleteModalFunc, closeModalFunc: closeDeleteModalFunc } = useModal();
  const { isModalOpen: isEditModalOpen, openModalFunc: openEditModalFunc, closeModalFunc: closeEditModalFunc } = useModal();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDeleteModalFunc();
        closeEditModalFunc();
      }
    };

    if (isDeleteModalOpen || isEditModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDeleteModalFunc, closeEditModalFunc]);

  return (
    <Wrapper>
      <KebabListWrapper>
        <KebabList onClick={openEditModalFunc}>수정하기</KebabList>
        {isEditModalOpen && (
          <ModalWrapper>
            <TodoModal type="edit" />
          </ModalWrapper>
        )}
        <KebabList onClick={openDeleteModalFunc}>삭제하기</KebabList>
        {isDeleteModalOpen && (
          <ModalWrapper>
            <AlertModal type="delete" />
          </ModalWrapper>
        )}
      </KebabListWrapper>
    </Wrapper>
  );
};

export default KebabModal;

const Wrapper = styled.div`
  position: absolute;
  width: 9.3rem;
  height: 8.2rem;

  padding: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: 1px solid var(--Grayd9);

  background: var(--MainLight);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  z-index: ${Z_INDEX.KebabModal_Wrapper};

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 8.6rem;
    height: 7.4rem;

    font-size: 1.2rem;
  }
`;

const KebabListWrapper = styled.ul`
  width: 100%;

  list-style-type: none;

  text-align: center;
`;

const KebabList = styled.li`
  padding: 0.8rem;

  justify-content: center;

  border-radius: 4px;
  outline: none;

  font-size: 1.4rem;
  color: #163020;

  cursor: pointer;

  &:hover {
    background: #eef0e5;
    color: var(--Main);
  }
`;
