import { deleteCard } from "@/api/cards";
import { Card } from "@/api/cards/cards.types";
import Division from "@/assets/icons/category-division.svg";
import Close from "@/assets/icons/close.svg";
import Kebab from "@/assets/icons/kebab.svg";
import AlertModal from "@/components/Modal/AlertModal";
import EditTaskModal from "@/components/Modal/EditTaskModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import TaskDropdown from "@/components/Modal/TaskDropdown";
import ColumnName from "@/components/common/Chip/ColumnName";
import Tag from "@/components/common/Chip/Tag";
import { useModal } from "@/hooks/useModal";
import { cardsAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import React, { useState } from "react";
import styled from "styled-components";
import NoProfileImage from "../../common/NoProfileImage/ProfileImage";
import Comments from "./Comments";

const TaskModal: React.FC<{ cardData: Card; columnId: number; closeModalFunc: () => void }> = ({ cardData, columnId, closeModalFunc }) => {
  const { isModalOpen: isEditModalOpen, openModalFunc: openEditModal, closeModalFunc: closeEditModal } = useModal();
  const { isModalOpen: isDeleteModalOpen, openModalFunc: openDeleteModal, closeModalFunc: closeDeleteModal } = useModal();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cards, setCards] = useAtom(cardsAtom);
  const token = localStorage.getItem("accessToken");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownDeleteClick = () => {
    openDeleteModal();
  };

  const handleDropdownEditClick = () => {
    openEditModal();
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  const handleConfirmDelete = async () => {
    await deleteCard({ cardId: cardData.id, token });
    setCards((prevCards) => {
      const updatedCards = prevCards[columnId].filter((card) => card.id !== cardData.id);
      return { ...prevCards, [columnId]: updatedCards };
    });
    closeModalFunc();
  };

  const handleConfirmEdit = async () => {};
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>{cardData.title}</Title>
          <IconContainer>
            <KebabIconContainer tabIndex={0} onBlur={handleDropdownClose}>
              <Kebab alt="kebab" width={28} height={28} onClick={toggleDropdown} />
              {isDropdownOpen && <TaskDropdown onEdit={handleDropdownEditClick} onCreate={handleDropdownDeleteClick} />}
            </KebabIconContainer>
            <Close alt="close" width={28} height={28} onClick={() => closeModalFunc()} />
          </IconContainer>
        </TitleWrapper>
        <ContactDeadLineWrapper>
          <Contact>담당자</Contact>
          <DeadLine>마감일</DeadLine>
          <ContactName>
            <ProfileImageWrapper>
              {cardData.assignee.profileImageUrl ? (
                <ProfileImage url={cardData.assignee.profileImageUrl} />
              ) : (
                <NoProfileImageWrapper>
                  <NoProfileImage id={cardData.assignee.id} nickname={cardData.assignee.nickname} />
                </NoProfileImageWrapper>
              )}
            </ProfileImageWrapper>
            {cardData.assignee.nickname}
          </ContactName>
          <DeadLineDate>{cardData.dueDate}</DeadLineDate>
        </ContactDeadLineWrapper>
        <CategoryWrapper>
          <ColumnName status="To do" />
          <DivisionWrapper>
            <Division alt="category-division" width={10} height={20} />
          </DivisionWrapper>
          <Tags>
            {cardData.tags.map((tag, idx) => (
              <Tag key={idx} tag={tag} />
            ))}
          </Tags>
        </CategoryWrapper>
        <Description>{cardData.description}</Description>
        {cardData.imageUrl && <Image src={cardData.imageUrl} alt="Task Image" />}
        <Comments cardData={cardData} />
      </Wrapper>
      {isEditModalOpen && (
        <ModalWrapper>
          <EditTaskModal cardId={cardData.id} onCancel={closeEditModal} onEdit={handleConfirmEdit} />
        </ModalWrapper>
      )}
      {isDeleteModalOpen && (
        <ModalWrapper>
          <AlertModal type="confirm" onCancel={closeDeleteModal} onConfirm={handleConfirmDelete} />
        </ModalWrapper>
      )}
    </>
  );
};

export default TaskModal;

const Wrapper = styled.div`
  width: 73rem;
  height: 76.3rem;
  overflow-y: auto;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    height: 70.8rem;

    padding: 2.8rem 2rem 2.8rem 2rem;

    border-radius: 8px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 8.5rem;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;

  gap: 2.4rem;
`;

const KebabIconContainer = styled.div`
  position: relative;
  align-items: center;
  gap: 2.4rem;

  cursor: pointer;
`;

const ContactDeadLineWrapper = styled.div`
  margin-top: 2.8rem;
  padding: 1.2rem 1.6rem 1rem 1.6rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  border-radius: 8px;
  border: 1px solid var(--Grayd9);

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 1.6rem;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1 1 50%;

  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
const DeadLine = styled.div`
  display: flex;
  justify-content: flex-start;

  font-size: 1.4rem;
  font-weight: 600;
  flex: 1 1 50%;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
const ContactName = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 50%;

  font-size: 1.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;

  margin-right: 0.8rem;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeadLineDate = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 50%;

  font-size: 1.2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const CategoryWrapper = styled.div`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 1.6rem;
  }
`;

const Tags = styled.div`
  display: flex;

  gap: 0.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    height: 50%;

    margin-right: 1.6rem;

    align-items: center;
    float: left;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    height: auto;
  }
`;

const DivisionWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-left: 1.2rem;
    margin-right: 0.2rem;
  }
`;

const Description = styled.div`
  width: 100%;

  margin: 1.6rem auto;

  overflow-wrap: break-word;
  word-wrap: break-word;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  text-align: left;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;

  margin-bottom: 2.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-bottom: 1.9rem;
  }
`;

const ProfileImage = styled.div<{ url: string }>`
  width: 2.7rem;
  height: 2.7rem;

  border-radius: 4.4rem;

  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const NoProfileImageWrapper = styled.div`
  width: 2.7rem;

  line-height: 2.7rem;
  font-size: 1.3rem;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 2.4rem;

    line-height: 2.4rem;
  }
`;
