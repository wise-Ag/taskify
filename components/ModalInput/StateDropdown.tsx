import { useState } from "react";
import styled from "styled-components";
import ColumnName from "@/components/Chip/ColumnName";
import arrowDropdown from "@/assets/icons/arrow-drop-down.svg";
import DropdownList from "./DropdownList";
import Image from "next/image";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("To Do");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Title>상태</Title>
      <DropdownBox $isOpen={isOpen}>
        <ColumnName status={status} />
        <DropdownButton src={arrowDropdown} alt="드롭다운 버튼" onClick={toggleDropdown} />
      </DropdownBox>
      <DropdownList $isOpen={isOpen} setStatus={setStatus} />
    </Wrapper>
  );
}

export default Dropdown;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Title = styled.div`
  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;
`;

const DropdownBox = styled.div<{ $isOpen: boolean }>`
  width: 21.7rem;
  height: 4.8rem;

  padding: 1.3rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.6rem;
  border: 1px solid ${(props) => (props.$isOpen ? "var(--Violet)" : "var(--Grayd9)")};
  background: var(--White);
`;

const DropdownButton = styled(Image)`
  width: 2.6rem;
  height: 2.6rem;

  cursor: pointer;
`;
