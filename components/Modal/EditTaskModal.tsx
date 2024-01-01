// 얘랑 싸우는 중

import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import { useState, useEffect } from "react";
import { getCard } from "@/api/cards";
import ModalInput from "./ModalInput/ModalInput";
import { Card } from "@/api/cards/cards.types";
import ContactDropdown from "@/components/Modal/ModalInput/ContactDropdown";
import StateDropdown from "@/components/Modal/ModalInput/StateDropdown";

interface EditTaskModalProps {
  cardId: number;
  onCancel?: () => void;
}

const EditTaskModal = ({ cardId, onCancel }: EditTaskModalProps) => {
  const [cardData, setCardData] = useState<Card | null>(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCardData = async () => {
      const data = await getCard({ cardId, token });
      if (data) {
        setCardData(data);
      }
    };

    fetchCardData();
  }, [cardId, token]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardData({ ...cardData, title: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardData({ ...cardData, description: e.target.value });
  };

  const handleTagsChange = (newTags: string[]) => {
    if (cardData) {
      setCardData({ ...cardData, tags: newTags });
    }
  };

  const handleEdit = () => {
    console.log("수정된 카드 데이터:", cardData);
    // 여기에 서버로 데이터를 보내는 코드를 추가...
  };

  return (
    <Wrapper>
      <TodoTitle>할 일 수정</TodoTitle>
      <StateDropdown dashboardId={cardData.dashboardId} defaultColumnId={cardData.columnId} />
      <ContactDropdown dashboardId={cardData.dashboardId} assigneeProfileImageUrl={cardData.assignee.profileImageUrl} assigneeNickname={cardData.assignee.nickname} />
      <ModalInput label="제목" $inputType="제목" value={cardData.title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={cardData.description} onChange={handleDescriptionChange} />
      <ModalInput $inputType="마감일" label="마감일" value={cardData.dueDate} />
      <TagInput initialTags={cardData.tags} onTagsChange={handleTagsChange} />
      <ImageUploadInput type="modal" initialImageUrl={cardData.imageUrl} />
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickLeft={onCancel} onClickRight={handleEdit}>
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
  //gap: 3.2rem;

  background: var(--White);

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
