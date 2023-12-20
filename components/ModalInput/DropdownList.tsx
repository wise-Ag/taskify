import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
import styled from "styled-components";
import checkIcon from "@/assets/icons/check.svg";
import Image from "next/image";
import ColumnName from "../Chip/ColumnName";

interface DropDownMenuProps {
  $isOpen: boolean;
  setStatus: Dispatch<SetStateAction<string>>;
}

function DropdownList({ $isOpen, setStatus }: DropDownMenuProps) {
  const columnData = [
    { id: 0, status: "To Do" },
    { id: 1, status: "On Progress" },
    { id: 2, status: "Done" },
  ];

  const [selectedId, setSelectedId] = useState(0);
  const handleSelected = (id: number, stauts: string) => {
    setSelectedId(id);
    setStatus(stauts);
  };

  return (
    <Wrapper $isOpen={$isOpen}>
      <DropdownContent>
        <ColumnWrapper>
          {columnData.map((column) => (
            <ButtonWraper key={column.id}>
              {selectedId === column.id && <CheckIcon src={checkIcon} alt="Check Icon" />}
              <Button onClick={() => handleSelected(column.id, column.status)}>
                <ColumnName status={column.status} />
              </Button>
            </ButtonWraper>
          ))}
        </ColumnWrapper>
      </DropdownContent>
    </Wrapper>
  );
}

export default DropdownList;

const Wrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

const DropdownContent = styled.div`
  width: 21.7rem;
  height: 11.8rem;

  padding: 1.3rem 0.8rem;

  border-radius: 0.6rem;
  border: 1px solid var(--Gray30);
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

const CheckIcon = styled(Image)`
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
