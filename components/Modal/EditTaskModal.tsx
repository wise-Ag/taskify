import { getCard, putCard } from "@/api/cards";
import { postCardImage } from "@/api/columns";
import { Card } from "@/api/cards/cards.types";
import ContactDropdown from "@/components/Modal/ModalInput/ContactDropdown";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import StateDropdown from "@/components/Modal/ModalInput/StateDropdown";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { cardAssigneeIdAtom, cardImageAtom, cardsAtom, dueDateAtom, tagAtom } from "@/states/atoms";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ModalInput from "./ModalInput/ModalInput";

interface EditTaskModalProps {
  cardId: number;
  onEdit?: () => void;
  onCancel: () => void;
}

const EditTaskModal = ({ cardId, onCancel, onEdit }: EditTaskModalProps) => {
  const [cardData, setCardData] = useState<Card | null>(null);
  const [cards, setCards] = useAtom(cardsAtom);
  const [tags, setTags] = useAtom(tagAtom);
  const [dueDate, setDueDate] = useAtom(dueDateAtom);
  const [cardImage, setCardImage] = useAtom(cardImageAtom);
  const [assigneeUserId, setAssigneeUserId] = useAtom(cardAssigneeIdAtom);
  const token = localStorage.getItem("accessToken");
  const router = useRouter();
  const { boardid } = router.query;
  const dashboardId = Number(boardid);

  useEffect(() => {
    const fetchCardData = async () => {
      const data = await getCard({ cardId, token });
      if (data) {
        setCardData(data);
        setDueDate(data.dueDate);
        setAssigneeUserId(data.assignee.id);
        setTags(data.tags);
      }
    };

    fetchCardData();
  }, [cardId, token, setAssigneeUserId, setTags]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  const handleColumnChange = (newColumnId: number) => {
    if (cardData) {
      setCardData({
        ...cardData,
        columnId: newColumnId,
      });
    }
  };

  const handleSelectMember = (userId: number) => {
    setAssigneeUserId(userId);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardData({ ...cardData, title: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardData({ ...cardData, description: e.target.value });
  };

  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newDueDate = e.target.value;
    setCardData({ ...cardData, dueDate: newDueDate });
    setDueDate(newDueDate);
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleSubmit = async () => {
    if (!cardData) return;

    let imageUrl = cardData.imageUrl;

    if (cardImage && cardImage instanceof File) {
      const formData = new FormData();
      formData.append("image", cardImage);

      const cardImageRes = await postCardImage({ columnId: cardData.columnId, token, formData });
      if (cardImageRes) {
        imageUrl = cardImageRes.imageUrl;
      }
    }

    const updatedCardData = {
      cardId: cardData.id,
      dashboardId: cardData.dashboardId,
      columnId: cardData.columnId,
      title: cardData.title,
      description: cardData.description,
      dueDate,
      tags,
      ...(assigneeUserId !== null && { assigneeUserId }),
      imageUrl,
      token,
    };

    const updatedCard = await putCard(updatedCardData);

    if (updatedCard) {
      console.log("Card updated successfully:", updatedCard);
      if (onEdit) onEdit();
    } else {
      console.error("Failed to update card");
    }
  };

  return (
    <Wrapper>
      <TodoTitle>할 일 수정</TodoTitle>
      <DropdownWrapper>
        <StateDropdown dashboardId={cardData.dashboardId} defaultColumnId={cardData.columnId} onColumnSelect={handleColumnChange} />
        <ContactDropdown
          onSelectMember={handleSelectMember}
          dashboardId={cardData.dashboardId}
          assigneeProfileImageUrl={cardData.assignee.profileImageUrl}
          assigneeNickname={cardData.assignee.nickname}
        />
      </DropdownWrapper>
      <ModalInput label="제목" $inputType="제목" value={cardData.title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={cardData.description} onChange={handleDescriptionChange} />
      <ModalInput label="마감일" $inputType="마감일" value={cardData.dueDate} onChange={handleDueDateChange} />
      <TagInput initialTags={cardData.tags} onTagsChange={handleTagsChange} />
      <ImageUploadInput type="modal" initialImageUrl={cardData.imageUrl} />
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickLeft={onCancel} onClickRight={handleSubmit} isRightDisabled={!cardData.title || !cardData.description}>
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
