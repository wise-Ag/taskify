import { Columns } from "@/api/columns/columns.types";
import CheckIcon from "@/assets/icons/check.svg";
import ColumnName from "@/components/common/Chip/ColumnName";
import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
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
            <ButtonWraper key={column.id}>
              {selectedId === column.id && <StyledCheckIcon alt="Check Icon" />}
              <Button onClick={() => handleSelected(column.id, column.title)}>
                <ColumnName status={column.title} />
              </Button>
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
  height: 11.8rem;

  padding: 1.3rem 0.8rem;

  border-radius: 0.6rem;
  border: 1px solid var(--Grayd9);
  background: var(--White);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  position: relative;
`;

const ColumnWrapper = styled.div`
  width: 12.2rem;
  height: 9.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 2.2rem;
  height: 2.2rem;

  position: absolute;
`;

const ButtonWraper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;
`;

const Button = styled.button`
  margin-left: 2.8rem;
`;
