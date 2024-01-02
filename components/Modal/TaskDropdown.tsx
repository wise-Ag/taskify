import styled from "styled-components";

const TaskDropdown = ({ onEdit, onCreate }: any) => {
  return (
    <DropdownMenu>
      <List onClick={onEdit}>수정하기</List>
      <List onClick={onCreate}>삭제하기</List>
    </DropdownMenu>
  );
};

export default TaskDropdown;

const DropdownMenu = styled.div`
  width: 9.3rem;
  height: 8.2rem;

  border-radius: 6px;
  border: 1px solid var(--Grayd9);

  position: absolute;
  top: 50;
  right: -80;

  background: var(--White);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
`;

const List = styled.div`
  margin: 0.6rem;
  padding: 0.8rem;
  border-radius: 6px;
  outline: none;

  display: flex;
  justify-content: center;

  font-size: 1.4rem;
  color: #163020;

  cursor: pointer;

  &:hover {
    background: #eef0e5;
    color: var(--Main);
  }
`;
