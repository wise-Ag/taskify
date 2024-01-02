import { postCards } from "@/api/cards";
import { CardProps } from "@/api/cards/cards.types";
import { postCardImage } from "@/api/columns";
import ModalInput from "@/components/Modal/ModalInput/ModalInput";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { cardAssigneeIdAtom, cardImageAtom, cardsAtom, cardsTotalCountAtom, dueDateAtom, tagAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import ContactDropdown from "./ModalInput/ContactDropdown";
import ImageUploadInput from "./ModalInput/ImageUploadInput";

interface AddTaskModalProps {
  closeModalFunc: () => void;
  columnId: number;
}

const AddTaskModal = ({ closeModalFunc, columnId }: AddTaskModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("accessToken");
  const router = useRouter();
  const { boardid } = router.query;
  const dashboardId = Number(boardid);
  const modalRef = useRef(null);
  const [cards, setCards] = useAtom(cardsAtom);
  const [tags, setTags] = useAtom(tagAtom);
  const [dueDate, setDueDate] = useAtom(dueDateAtom);
  const [cardImage, setCardImage] = useAtom(cardImageAtom);
  const [assigneeUserId, setAssigneeUserId] = useAtom(cardAssigneeIdAtom);
  const [, setCardsTotalCount] = useAtom(cardsTotalCountAtom);

  const handleSubmit = async () => {
    const postCardsParams: CardProps = { dashboardId, columnId, title, description, tags, token };

    if (assigneeUserId) postCardsParams.assigneeUserId = assigneeUserId;
    if (dueDate) postCardsParams.dueDate = dueDate;
    if (cardImage) {
      const formData = new FormData();
      formData.append("image", cardImage);

      const cardImageRes = await postCardImage({ columnId, token, formData });
      if (cardImageRes === null) return alert("이미지 저장에 실패했습니다");
      postCardsParams.imageUrl = cardImageRes.imageUrl;
    }
    const postCardsRes = await postCards(postCardsParams);
    if (postCardsRes === null) return alert("할 일 생성에 실패했습니다.");
    if (postCardsRes) {
      setCards((prevCards) => {
        const updatedCards = [postCardsRes, ...prevCards[columnId]];
        return { ...prevCards, [columnId]: updatedCards };
      });
      setCardsTotalCount((prev) => {
        const updatedCardsCount = prev[columnId] + 1;
        return { ...prev, [columnId]: updatedCardsCount };
      });
    }

    deleteAtomData();
    closeModalFunc();
  };

  //atom전역변수 초기화
  const deleteAtomData = () => {
    setDueDate("");
    setAssigneeUserId(null);
    setCardImage(null);
    setTags([]);
  };

  const handleSelectMember = (userId: number) => setAssigneeUserId(userId);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitle(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(event.target.value);

  const isSubmitDisable = () => {
    return dueDate == "Invalid Date" || !title || !description;
  };

  return (
    <Wrapper ref={modalRef}>
      <TodoTitle>할 일 생성</TodoTitle>
      <ContactDropdown onSelectMember={handleSelectMember} dashboardId={dashboardId} />
      <ModalInput $inputType="제목" label="제목" value={title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={description} onChange={handleDescriptionChange} />
      <ModalInput $inputType="마감일" label="마감일" value={dueDate} />
      <TagInput />
      <ImageUploadInput type="modal" />
      <ButtonWrapper>
        <ButtonSet
          type="modalSet"
          onClickLeft={() => {
            closeModalFunc();
            deleteAtomData();
          }}
          onClickRight={handleSubmit}
          isRightDisabled={isSubmitDisable()}
        >
          생성
        </ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AddTaskModal;

const Wrapper = styled.div`
  width: 50.6rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
