import DropdownButton from "@/assets/icons/arrow-drop-down.svg";
import ColumnName from "@/components/common/Chip/ColumnName";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DropdownList from "@/components/Modal/ModalInput/DropdownList";
import { getColumns } from "@/api/columns";
import { Columns } from "@/api/columns/columns.types";

interface StateDropdownProps {
  dashboardId: number;
  defaultColumnId?: number;
}

const Dropdown = ({ dashboardId, defaultColumnId }: StateDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("로딩 중");
  const [columns, setColumns] = useState<Columns[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getColumns({ dashboardId, token });
      if (data && data.result === "SUCCESS") {
        setColumns(data.data);
        // defaultColumnId와 일치하는 컬럼의 이름을 초기 상태로 설정
        const defaultColumn = data.data.find((column) => column.id === defaultColumnId);
        if (defaultColumn) {
          setStatus(defaultColumn.title);
        }
      }
    };

    fetchData();
  }, [dashboardId, token]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Title>상태</Title>
      <DropdownBox $isOpen={isOpen}>
        <ColumnName status={status} />
        <StyledDropdownButton alt="드롭다운 버튼" onClick={toggleDropdown} />
      </DropdownBox>
      <DropdownList $isOpen={isOpen} setStatus={setStatus} columnData={columns} />
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;

  margin-bottom: 1rem;
`;

const DropdownBox = styled.div<{ $isOpen: boolean }>`
  width: 21.7rem;
  height: 4.8rem;

  padding: 1.3rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.6rem;
  border: 1px solid ${(props) => (props.$isOpen ? "var(--Main)" : "var(--Grayd9)")};
  background: var(--White);
`;

const StyledDropdownButton = styled(DropdownButton)`
  width: 2.6rem;
  height: 2.6rem;

  cursor: pointer;
`;
