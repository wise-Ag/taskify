import { putCard } from "@/api/cards";
import { Card } from "@/api/cards/cards.types";
import { postCardImage } from "@/api/columns";
import ContactDropdown from "@/components/Modal/ModalInput/ContactDropdown";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import StateDropdown from "@/components/Modal/ModalInput/StateDropdown";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { cardAssigneeIdAtom, cardAtom, cardImageAtom, dueDateAtom, isCardUpdatedAtom, tagAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ModalInput from "./ModalInput/ModalInput";

interface EditTaskModalProps {
  card: Card;
  onEdit?: () => void;
  onCancel: () => void;
}

const EditTaskModal = ({ card, onCancel, onEdit }: EditTaskModalProps) => {
  const [cardData, setCardData] = useState<Card>(card);
  const [tags, setTags] = useAtom(tagAtom);
  const [dueDate, setDueDate] = useAtom(dueDateAtom);
  const [cardImage, setCardImage] = useAtom(cardImageAtom);
  const [assigneeUserId, setAssigneeUserId] = useAtom(cardAssigneeIdAtom);
  const [, setUpdatedCard] = useAtom(cardAtom); //바로 업데이트를 위한 조타이
  const [, setIsCardUpdated] = useAtom(isCardUpdatedAtom);
  const [isImageDeleteClick, setIsImageDeleteClick] = useState(false); //이미지 삭제를 감지
  const [token, setToken] = useState<string | null>(null);

  const handleColumnChange = (newColumnId: number) => {
    setCardData({
      ...cardData,
      columnId: newColumnId,
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardData({ ...cardData, title: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardData({ ...cardData, description: e.target.value });
  };

  const handleSubmit = async () => {
    if (!cardData) return;
    let newDuedate = dueDate == "" ? null : dueDate;

    let imageUrl: string | null = cardData.imageUrl;
    if (cardImage && cardImage instanceof File) {
      const formData = new FormData();
      formData.append("image", cardImage);

      const cardImageRes = await postCardImage({ columnId: cardData.columnId, token, formData });
      if (cardImageRes) {
        imageUrl = cardImageRes.imageUrl;
      }
    } else {
      if (isImageDeleteClick) imageUrl = null;
    }
    const updatedCardData = {
      cardId: cardData.id,
      dashboardId: cardData.dashboardId,
      columnId: cardData.columnId,
      title: cardData.title,
      description: cardData.description,
      dueDate: newDuedate,
      tags,
      assigneeUserId,
      imageUrl,
      token,
    };
    const updatedCard = await putCard(updatedCardData);

    if (updatedCard) {
      console.log(updatedCard);
      setUpdatedCard({ ...updatedCard });
      setIsCardUpdated(true);
      if (onEdit) onEdit();
    } else {
      console.error("Failed to update card");
    }
    deleteAtomData();
  };

  //atom전역변수 초기화
  const deleteAtomData = () => {
    setDueDate("");
    setAssigneeUserId(null);
    setCardImage(null);
    setTags([]);
  };

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    if (token) {
      if (cardData.assignee) setAssigneeUserId(cardData.assignee.id);
      setDueDate(cardData.dueDate);
      setTags(cardData.tags);
    }
  }, [token]);
  return (
    <Wrapper>
      <TodoTitle>할 일 수정</TodoTitle>
      <DropdownWrapper>
        <StateDropdown dashboardId={cardData.dashboardId} defaultColumnId={cardData.columnId} onColumnSelect={handleColumnChange} />
        {cardData.assignee ? (
          <ContactDropdown dashboardId={cardData.dashboardId} assigneeNickname={cardData.assignee.nickname} />
        ) : (
          <ContactDropdown dashboardId={cardData.dashboardId} />
        )}
      </DropdownWrapper>
      <ModalInput label="제목" $inputType="제목" value={cardData.title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={cardData.description} onChange={handleDescriptionChange} />
      <ModalInput label="마감일" $inputType="마감일" value={cardData.dueDate} />
      <TagInput />
      <ImageUploadInput atomtype="cardImage" type="modal" initialImageUrl={cardData.imageUrl} handleDeleteClick={setIsImageDeleteClick} />
      <ButtonWrapper>
        <ButtonSet
          type="modalSet"
          onClickLeft={() => {
            onCancel();
            deleteAtomData();
          }}
          onClickRight={handleSubmit}
          isRightDisabled={!cardData.title || !cardData.description}
        >
          수정
        </ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default EditTaskModal;

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

    gap: 2.4rem;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  @media (max-width: ${DeviceSize.mobile}) {
    flex-direction: column;
    gap: 2.4rem;
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
