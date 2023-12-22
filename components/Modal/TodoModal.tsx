import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ButtonSet from "@/components/ButtonSet/ButtonSet";
import ModalInput from "@/components/ModalInput/ModalInput";
import Dropdown from "@/components/ModalInput/StateDropdown";
import TagInput from "@/components/ModalInput/TagInput";

interface CategoryProps {
  type: "create" | "edit";
}

function TodoModal({ type }: CategoryProps) {
  return (
    <Wrapper>
      <TodoTitle>할 일 {type === "create" ? "생성" : "수정"}</TodoTitle>
      <ContentContainer>
        {type === "edit" && <Dropdown />}
        {/* <ContactDropdown members={}/> */}
        <Dropdown /> {/* ContactDropdown 쓰는 법 몰라서 임의로 넣은 컴포넌트입니다 */}
      </ContentContainer>
      <ModalInput inputType="댓글" label="설명" />
      <ModalInput inputType="마감일" label="마감일" />
      <TagInput />
      <ButtonWrapper>
        <ButtonSet type="modalSet">
          {type === "create" && "생성"}
          {type === "edit" && "수정"}
        </ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TodoModal;

const Wrapper = styled.div`
  width: 50.6rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;

    padding: 2.8rem 2rem;
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
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: ${DeviceSize.mobile}) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
