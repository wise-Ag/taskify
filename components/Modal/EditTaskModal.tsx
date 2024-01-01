// 얘랑 싸우는 중

import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ImageUploadInput from "./ModalInput/ImageUploadInput";
import React, { useState, useEffect } from "react";
import { getCard } from "@/api/cards";
import ModalInput from "./ModalInput/ModalInput";
import { Card } from "@/api/cards/cards.types";
import ContactDropdown from "./ModalInput/ContactDropdown";

interface EditTaskModalProps {
  cardId: number;
  onCancel?: () => void;
  onEdit?: () => void;
}

const EditTaskModal = ({ cardId, onCancel, onEdit }: EditTaskModalProps) => {
  const [cardData, setCardData] = useState<Card | null>(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCardData = async () => {
      const data = await getCard({ cardId, token });
      if (data) {
        setCardData(data); // 여기에 데이터를 설정합니다.
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

  return (
    <Wrapper>
      <TodoTitle>할 일 수정</TodoTitle>
      {/* <ContactDropdown members={membersData} /> */}
      <ModalInput label="제목" $inputType="제목" value={cardData.title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={cardData.description} onChange={handleDescriptionChange} />
      {/* <ModalInput $inputType="마감일" label="마감일" value={cardData.dueDate} onChange={handleDueDateChange} /> */}
      <TagInput />
      <ImageUploadInput type="modal" />
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickLeft={onCancel} onClickRight={onEdit}>
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
