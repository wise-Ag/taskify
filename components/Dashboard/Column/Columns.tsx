import { getColumns, postColumns } from "@/api/columns";
import Column from "@/components/Dashboard/Column/Column";
import ModalContainer, { FormData } from "@/components/Modal/ModalContainer";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import ToastModal from "@/components/Modal/ToastModal";
import Button from "@/components/common/Buttons/Button";
import { useModal } from "@/hooks/useModal";
import { columnsAtom, totalColumnsAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Columns = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [totalColumns, setTotalColumns] = useAtom(totalColumnsAtom);
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

  const handleOnSubmit = async (data: FormData) => {
    const res = await postColumns({ title: data.inputData, dashboardId: Number(boardid), token: localStorage.getItem("accessToken") });

    // if (totalColumns >= 10) {
    //   toast("칼럼의 개수는 10개를 초과할 수 없습니다.");
    //   setToastVisible((prev) => !prev);
    // }

    if (res == null) {
      toast("칼럼 생성에 실패했습니다.");
      setToastVisible((prev) => !prev);
      closeModalFunc();
      return;
    }

    setColumns([...columns, res]);
    setTotalColumns(totalColumns + 1);
    closeModalFunc();
  };

  const handleAddColumn = () => {
    if (totalColumns >= 10) {
      toast("칼럼의 개수는 10개를 초과할 수 없습니다.");
      setToastVisible((prev) => !prev);
    } else {
      openModalFunc();
    }
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
          <Button type="addNewColumn" onClick={handleAddColumn}>
            <StyledText $isDisabled={totalColumns >= 10}>새로운 컬럼 추가하기</StyledText>
          </Button>
        </ButtonWrapper>
      </Wrapper>
      {toastVisible && <ToastModal />}
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

  z-index: ${Z_INDEX.Column_ButtonWrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    position: sticky;
    bottom: 0;
  }
`;

const StyledText = styled.p<{ $isDisabled: boolean }>`
  color: ${(props) => props.$isDisabled && "var(--Gray9f)"};
`;
