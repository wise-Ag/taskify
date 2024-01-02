import { getCard } from "@/api/cards";
import { Card } from "@/api/cards/cards.types";
import ContactDropdown from "@/components/Modal/ModalInput/ContactDropdown";
import ImageUploadInput from "@/components/Modal/ModalInput/ImageUploadInput";
import StateDropdown from "@/components/Modal/ModalInput/StateDropdown";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ModalInput from "./ModalInput/ModalInput";
import { dueDateAtom } from "@/states/atoms";
import { useAtom } from "jotai";
interface EditTaskModalProps {
  cardId: number;
  onCancel?: () => void;
  onEdit?: () => void;
}

const EditTaskModal = ({ cardId, onCancel }: EditTaskModalProps) => {
  const [cardData, setCardData] = useState<Card | null>(null);
  const [, setDueDate] = useAtom(dueDateAtom); // Use the dueDateAtom
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCardData = async () => {
      const data = await getCard({ cardId, token });
      if (data) {
        setCardData(data);
        setDueDate(data.dueDate);
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

  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newDueDate = e.target.value;
    setCardData({ ...cardData, dueDate: newDueDate });
    setDueDate(newDueDate);
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
      <DropdownWrapper>
        <StateDropdown dashboardId={cardData.dashboardId} defaultColumnId={cardData.columnId} />
        <ContactDropdown dashboardId={cardData.dashboardId} assigneeProfileImageUrl={cardData.assignee.profileImageUrl} assigneeNickname={cardData.assignee.nickname} />
      </DropdownWrapper>
      <ModalInput label="제목" $inputType="제목" value={cardData.title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={cardData.description} onChange={handleDescriptionChange} />
      <ModalInput label="마감일" $inputType="마감일" value={cardData.dueDate} onChange={handleDueDateChange} />
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
