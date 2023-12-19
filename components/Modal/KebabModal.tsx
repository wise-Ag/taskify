import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

function KebabModal() {
  return (
    <KebabWrapper>
      <KebabListWrapper>
        <KebabList>수정하기</KebabList>
        <KebabList>삭제하기</KebabList>
      </KebabListWrapper>
    </KebabWrapper>
  );
}

export default KebabModal;

const KebabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.3rem;
  height: 8.2rem;
  border-radius: 6px;
  border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
  background: var(--white-white_FFFFFF, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 8.6rem;
    height: 7.4rem;
    font-size: 1.2rem;
  }
`;

const KebabListWrapper = styled.ul`
  display: column;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const KebabList = styled.li`
  padding: 8px;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-size: 1.4rem;
  &:hover {
    background: var(--Violet8);
    color: var(--Violet);
  }
`;
