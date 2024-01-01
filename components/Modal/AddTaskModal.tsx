import { getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import { postCards } from "@/api/cards";
import ModalInput from "@/components/Modal/ModalInput/ModalInput";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import styled from "styled-components";
import ContactDropdown from "./ModalInput/ContactDropdown";
import ImageUploadInput from "./ModalInput/ImageUploadInput";
import React, { useState, useEffect } from "react";

interface AddTaskModalProps {
  onCancel?: () => void;
}

const AddTaskModal = ({ onCancel }: AddTaskModalProps) => {
  const [membersData, setMembersData] = useState<Member[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const token = localStorage.getItem("accessToken");
  const router = useRouter();
  const { boardid } = router.query;
  const dashboardId = Number(boardid);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitle(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(event.target.value);
  const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDueDate(event.target.value);

  const handleSubmit = async () => {
    try {
      const card = await postCards({
        assigneeUserId: 209, // 수정 필요
        dashboardId,
        columnId: 1242, // 수정 필요
        title,
        description,
        dueDate,
        tags,
        imageUrl,
        token,
      });

      if (card) {
        console.log("Card created successfully", card);
        // 성공적으로 생성된 경우 처리 로직
      }
    } catch (error) {
      console.error("Failed to create card", error);
      // 에러 처리 로직
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const memberData = await getMembers({ dashboardId, token });
        if (memberData) {
          setMembersData(memberData.members);
        }
      } catch (error) {
        console.error("Failed to fetch members", error);
      }
    };

    fetchMembers();
  }, [dashboardId, token]);

  return (
    <Wrapper>
      <TodoTitle>할 일 생성</TodoTitle>
      <ContactDropdown members={membersData} />
      <ModalInput $inputType="제목" label="제목" value={title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={description} onChange={handleDescriptionChange} />
      <ModalInput $inputType="마감일" label="마감일" value={dueDate} onChange={handleDueDateChange} />
      <TagInput />
      <ImageUploadInput type="modal" />
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickLeft={onCancel} onClickRight={handleSubmit}>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
