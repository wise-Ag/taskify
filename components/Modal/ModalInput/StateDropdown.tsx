import { getColumns } from "@/api/columns";
import DropdownIcon from "@/assets/icons/arrow-drop-down.svg";
import DropdownList from "@/components/Modal/ModalInput/DropdownList";
import ColumnName from "@/components/common/Chip/ColumnName";
import { columnsAtom, isOpenAtom, selectedIdAtom, statusAtom } from "@/states/atoms";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import styled from "styled-components";

interface StateDropdownProps {
  dashboardId: number;
  defaultColumnId: number;
  onColumnSelect?: (columnId: number) => void;
}

const StateDropdown = ({ dashboardId, defaultColumnId, onColumnSelect }: StateDropdownProps) => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [status, setStatus] = useAtom(statusAtom);
  const [columns, setColumns] = useAtom(columnsAtom);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsOpen(false);
    const fetchData = async () => {
      const data = await getColumns({ dashboardId, token });
      if (data && data.result === "SUCCESS") {
        setColumns(data.data);
        const defaultColumn = data.data.find((column) => column.id === defaultColumnId);
        if (defaultColumn) {
          setStatus(defaultColumn.title);
          setSelectedId(defaultColumnId);
        }
      }
    };

    fetchData();
  }, [dashboardId]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleColumnSelect = (columnId: number) => {
    setSelectedId(columnId);
    const selectedColumn = columns.find((column) => column.id === columnId);
    if (selectedColumn) {
      setStatus(selectedColumn.title);
    }
    setIsOpen(false);
    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // 드롭다운이 열려 있을 때만 이벤트 리스너를 등록
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Wrapper>
      <Title>상태</Title>
      <Container ref={dropdownRef}>
        <DropdownBox $isOpen={isOpen}>
          <ColumnName status={status} />
          <ArrowDownIcon alt="드롭다운 버튼" onClick={toggleDropdown} $isOpen={isOpen} />
        </DropdownBox>
        <DropdownList $isOpen={isOpen} setStatus={setStatus} columnData={columns} selectedId={selectedId} onColumnSelect={handleColumnSelect} />
      </Container>
    </Wrapper>
  );
};

export default StateDropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 1rem;

  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;
`;

const Container = styled.div`
  width: 21.7rem;
  height: 4.8rem;

  position: relative;
`;

const DropdownBox = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;

  padding: 1.4rem 1.6rem;
  border-radius: 6px;
  border: 1.2px solid ${(props) => (props.$isOpen ? "var(--Main)" : "var(--Grayd9)")};

  display: flex;
  align-items: center;
  position: relative;

  background: var(--White);
`;

const ArrowDownIcon = styled(DropdownIcon)`
  position: absolute;
  top: 50%;
  right: 1.6rem;

  transform: translateY(-50%) ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};

  cursor: pointer;
`;
