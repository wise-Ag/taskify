import styled, { css } from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import Button from "../button/Button";
import ButtonSet from "../ButtonSet/ButtonSet";
import NameInput from "./NameInput";

interface CategoryProps {
  type: "create" | "edit";
}

const getHeight = (type: CategoryProps["type"]) => {
  if (type === "create") {
    return css`
      height: 76.6rem;
    `;
  } else if (type === "edit") {
    return css`
      height: 86.9rem;
    `;
  }
};

function TodoModal({ type }: CategoryProps) {
  return (
    <TodoModalWrapper type={type}>
      <TodoTitle>
        할 일 {type === "create" && "생성"}
        {type === "edit" && "수정"}
      </TodoTitle>
      <ContentContainer>
        {type === "edit" && (
          <ContentWrapper>
            <NameInput titleType="이름" />
          </ContentWrapper>
        )}
        <ContentWrapper>
          <NameInput titleType="이름" />
        </ContentWrapper>
      </ContentContainer>
      <div>
        <NameInput titleType="이름" />
      </div>
      <div>
        <NameInput titleType="이름" />
      </div>
      <div>
        <NameInput titleType="이름" />
      </div>
      <div>
        <NameInput titleType="이름" />
      </div>
      <div>
        <NameInput titleType="이름" />
      </div>
      <ButtonWrapper>
        <ButtonSet type="modalSet">
          {type === "create" && "생성"}
          {type === "edit" && "수정"}
        </ButtonSet>
      </ButtonWrapper>
    </TodoModalWrapper>
  );
}

export default TodoModal;

const TodoModalWrapper = styled.div`
  width: 50.6rem;
  height: 90.7rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  position: relative;

  border-radius: 8px;
  background: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    ${(props) => getHeight(props.type)};
  }
`;

const TodoTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: ${DeviceSize.mobile}) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 2.8rem;
  bottom: 2.8rem;
  border: 1px solid var(--Gray30);

  @media (max-width: ${DeviceSize.mobile}) {
    right: 2rem;
    bottom: 2.8rem;
  }
`;
