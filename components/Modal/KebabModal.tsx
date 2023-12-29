import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import { useState } from "react";
import TodoModal from "@/components/Modal/TodoModal";
import AlertModal from "@/components/Modal/AlertModal";
import { Z_INDEX } from "@/styles/ZindexStyles";

const KebabModal = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setEditModal((prev) => !prev);
  };

  const handleDelete = () => {
    setDeleteModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <KebabListWrapper>
        <KebabList onClick={handleEdit}>수정하기</KebabList>
        {editModal && <TodoModal type="edit" />}
        <KebabList onClick={handleDelete}>삭제하기</KebabList>
        {deleteModal && <AlertModal type="delete" />}
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
