import { postCards } from "@/api/cards";
import { getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import ModalInput from "@/components/Modal/ModalInput/ModalInput";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ContactDropdown from "./ModalInput/ContactDropdown";
import ImageUploadInput from "./ModalInput/ImageUploadInput";
import { useAtom } from "jotai";
import { cardAssigneeIdAtom, cardImageAtom, cardsAtom, dueDateAtom } from "@/states/atoms";
import { postCardImage } from "@/api/columns";
import { set } from "react-hook-form";
import { CardProps } from "@/api/cards/cards.types";

interface AddTaskModalProps {
  closeModalFunc: () => void;
  columnId: number;
}

const AddTaskModal = ({ closeModalFunc, columnId }: AddTaskModalProps) => {
  const [membersData, setMembersData] = useState<Member[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>();
  const token = localStorage.getItem("accessToken");
  const router = useRouter();
  const { boardid } = router.query;
  const dashboardId = Number(boardid);
  const modalRef = useRef(null);
  const [cards, setCards] = useAtom(cardsAtom);
  const [dueDate] = useAtom(dueDateAtom);
  const [cardImage] = useAtom(cardImageAtom);
  const [assigneeUserId] = useAtom(cardAssigneeIdAtom);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitle(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(event.target.value);

  const handleSubmit = async () => {
    const postCardsParams: CardProps = { dashboardId, columnId, title, description, dueDate, tags, token };

    // if (assigneeUserId) postCardsParams.assigneeUserId = assigneeUserId;

    if (cardImage) {
      const formData = new FormData();
      formData.append("image", cardImage);

      const cardImageRes = await postCardImage({ columnId, token, formData });
      if (cardImageRes === null) return alert("이미지 저장에 실패했습니다");
      setImageUrl(cardImageRes.imageUrl);
      console.log("image", cardImageRes?.imageUrl);
      postCardsParams.imageUrl = imageUrl;
      console.log("prop", postCardsParams);
    }
    const postCardsRes = await postCards(postCardsParams);
    if (postCardsRes === null) return alert("할 일 생성에 실패했습니다.");
    if (postCardsRes) {
      setCards((prevCards) => {
        const updatedCards = [postCardsRes, ...prevCards[columnId]];
        return { ...prevCards, [columnId]: updatedCards };
      });
    }
    closeModalFunc();
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
    <Wrapper ref={modalRef}>
      <TodoTitle>할 일 생성</TodoTitle>
      <ContactDropdown members={membersData} />
      <ModalInput $inputType="제목" label="제목" value={title} onChange={handleTitleChange} />
      <ModalInput $inputType="설명" label="설명" value={description} onChange={handleDescriptionChange} />
      <ModalInput $inputType="마감일" label="마감일" value={dueDate} />
      <TagInput />
      <ImageUploadInput type="modal" />
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickLeft={closeModalFunc} onClickRight={handleSubmit}>
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
