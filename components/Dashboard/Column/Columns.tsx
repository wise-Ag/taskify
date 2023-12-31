import { getColumns, postColumns } from "@/api/columns";
import { Columns as ColumnsData } from "@/api/columns/columns.types";
import Column from "@/components/Dashboard/Column/Column";
import ModalContainer from "@/components/Modal/ModalContainer";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import { useModal } from "@/hooks/useModal";
import { columnsAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Columns = () => {
  const [totalColumns, setTotalColumns] = useState(3);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [columns, setColumns] = useAtom(columnsAtom);
  const router = useRouter();
  const { boardid } = router.query;

  const isTitleExist = (titleToCheck: string) => {
    return columns.some((column) => column.title === titleToCheck);
  };

  const rules = {
    required: "생성할 이름을 입력해주세요",
    validate: (v: string) => {
      if (isTitleExist(v)) return "이름이 중복되었습니다. 다시 입력해주세요!";
    },
  };

  const handleOnSubmit = async (data: any) => {
    const res = await postColumns({ title: data.newTitle, dashboardId: Number(boardid), token: localStorage.getItem("accessToken") });
    if (res == null) {
      alert("컬럼 생성에 실패했습니다.");
      closeModalFunc();
      return;
    }
    setColumns([...columns, res]);
    closeModalFunc();
  };

  useEffect(() => {
    const loadColumnsData = async () => {
      if (!isNaN(Number(boardid))) {
        const res = await getColumns({
          dashboardId: Number(boardid),
          token: localStorage.getItem("accessToken"),
        });
        const columns = res?.data;
        if (columns) {
          setTotalColumns(columns.length);
          setColumns(() => {
            return [...columns];
          });
        }
      }
    };
    loadColumnsData();
  }, [boardid]);

  return (
    <>
      <Wrapper>
        {columns.map((column) => (
          <Column key={column.id} title={column.title} columnId={column.id} />
        ))}
        <ButtonWrapper>
          {/* 10개 넘으면 버튼 비활성화 */}
          <Button type="newDashboard" onClick={openModalFunc} disabled={totalColumns >= 10}>
            새로운 컬럼 추가하기
          </Button>
        </ButtonWrapper>
      </Wrapper>
      {isModalOpen && (
        <ModalWrapper>
          <ModalContainer title="새 컬럼 생성" label="이름" buttonType="생성" onClose={closeModalFunc} boardid={Number(boardid)} onSubmit={handleOnSubmit} rules={rules} />
        </ModalWrapper>
      )}
    </>
  );
};

export default Columns;

const Wrapper = styled.div`
  height: 100vh;
  margin-left: 30rem;

  display: flex;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 16rem;

    flex-direction: column;
    width: auto;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin-left: 6.7rem;
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 11rem;

  margin-top: 6.3rem;
  margin-left: 2rem;

  background: var(--Grayfa);

  z-index: ${Z_INDEX.Column_ButtonWrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    position: sticky;
    bottom: 0;
  }
`;
function setError(arg0: string, arg1: { message: string }) {
  throw new Error("Function not implemented.");
}
