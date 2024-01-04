import { Columns } from "@/api/columns/columns.types";
import CheckIcon from "@/assets/icons/check.svg";
import ColumnName from "@/components/common/Chip/ColumnName";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { SetStateAction } from "jotai";
import { Dispatch, forwardRef } from "react";
import styled from "styled-components";

interface DropDownMenuProps {
  $isOpen: boolean;
  setStatus: Dispatch<SetStateAction<string>>;
  columnData: Columns[];
  selectedId: number | null;
  onColumnSelect: (id: number) => void;
}

const DropdownList = ({ $isOpen, setStatus, columnData, selectedId, onColumnSelect }: DropDownMenuProps) => {
  const handleSelected = (id: number, title: string) => {
    setStatus(title);
    onColumnSelect(id);
  };

  return (
    <Wrapper $isOpen={$isOpen}>
      <DropdownContent>
        <ColumnWrapper>
          {columnData.map((column) => (
            <ButtonWraper key={column.id} onClick={() => handleSelected(column.id, column.title)}>
              <ColumnName status={column.title} />
              <StyledCheckIcon alt="Check Icon" />
            </ButtonWraper>
          ))}
        </ColumnWrapper>
      </DropdownContent>
    </Wrapper>
  );
};

export default DropdownList;

const Wrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

const DropdownContent = styled.div`
  width: 21.7rem;

  border-radius: 0.6rem;
  border: 1px solid var(--Grayd9);
  background: var(--White);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  position: relative;

  z-index: ${Z_INDEX.DropdownList_Wrapper};
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWraper = styled.li`
  height: 4.5rem;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
  &:hover {
    background: var(--Grayfa);
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  display: none;

  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  color: var(--Gray78);

  ${ButtonWraper}:hover & {
    display: block;
  }
`;
