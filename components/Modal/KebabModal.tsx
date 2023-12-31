import { deleteColumns, putColumns } from "@/api/columns";
import AlertModal from "@/components/Modal/AlertModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import { useModal } from "@/hooks/useModal";
import { columnsAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useAtom } from "jotai";
import { useEffect } from "react";
import styled from "styled-components";
import ModalContainer, { FormData } from "./ModalContainer";

const KebabModal = ({ columnId }: { columnId: number }) => {
  const [columns, setColumns] = useAtom(columnsAtom);
  const { isModalOpen: isDeleteModalOpen, openModalFunc: openDeleteModalFunc, closeModalFunc: closeDeleteModalFunc } = useModal();
  const { isModalOpen: isEditModalOpen, openModalFunc: openEditModalFunc, closeModalFunc: closeEditModalFunc } = useModal();

  const isTitleExist = (titleToCheck: string) => {
    return columns.some((column) => column.title === titleToCheck);
  };

  const rules = {
    required: "변경할 이름을 입력해주세요",
    validate: (v: string) => {
      if (isTitleExist(v)) return "이름이 중복되었습니다. 다시 입력해주세요!";
    },
  };

  const handleChangeColumnName = async (data: FormData) => {
    const res = await putColumns({ title: data.newTitle, columnId: columnId, token: localStorage.getItem("accessToken") });
    if (res == null) {
      alert("컬럼 이름 변경에 실피했습니다.");
      closeEditModalFunc();
      return;
    }
    const newUpdatedAt = new Date();
    setColumns(columns.map((v) => (v.id == columnId ? { title: data.newTitle, id: v.id, createdAt: v.createdAt, updatedAt: newUpdatedAt.toISOString() } : v)));
    closeEditModalFunc();
  };

  const handleDeleteColumn = async () => {
    await deleteColumns({ columnId, token: localStorage.getItem("accessToken") });
    setColumns([...columns.filter((v) => v.id !== columnId)]);
    closeDeleteModalFunc();
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
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
        <KebabList onClick={openDeleteModalFunc}>삭제하기</KebabList>
        {isEditModalOpen && (
          <ModalWrapper>
            <ModalContainer title="컬럼 관리" label="컬럼 이름" buttonType="변경" onClose={closeEditModalFunc} onSubmit={handleChangeColumnName} rules={rules} />
          </ModalWrapper>
        )}
        {isDeleteModalOpen && (
          <ModalWrapper>
            <AlertModal type="deleteColumn" onCancel={closeDeleteModalFunc} onConfirm={handleDeleteColumn} />
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

  background: var(--Grayfa);
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
