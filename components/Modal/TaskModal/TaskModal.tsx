import { Card } from "@/api/cards/cards.types";
import Division from "@/assets/icons/category-division.svg";
import Close from "@/assets/icons/close.svg";
import Kebab from "@/assets/icons/kebab.svg";
import KebabModal from "@/components/Modal/KebabModal";
import ColumnName from "@/components/common/Chip/ColumnName";
import Tag from "@/components/common/Chip/Tag";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import React, { useState } from "react";
import styled from "styled-components";
import NoProfileImage from "../../common/NoProfileImage/ProfileImage";
import Comments from "./Comments";

const TaskModal: React.FC<{ cardData: Card; closeModalFunc: () => void }> = ({ cardData, closeModalFunc }) => {
  const [isKebabModalOpen, setIsKebabModalOpen] = useState(false);

  const handleKebabClick = () => {
    setIsKebabModalOpen(!isKebabModalOpen);
  };

  const handleKebabClose = () => {
    setIsKebabModalOpen(false);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{cardData.title}</Title>
        <IconContainer>
          <KebabIconContainer tabIndex={0} onBlur={handleKebabClose}>
            <Kebab alt="kebab" width={28} height={28} onClick={handleKebabClick} />
            {isKebabModalOpen && <StyledKebabModal columnId={cardData.columnId} />}
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

const StyledKebabModal = styled(KebabModal)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${Z_INDEX.TaskModal_StyledKebabModal};
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

const CommentWrapper = styled.div`
  margin-top: 1.6rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: top;

  img {
    width: 3.2rem;
    height: 3.2rem;

    border-radius: 50%;
  }
`;

const RightWrapper = styled.div`
  margin-left: 1rem;
`;

const CommentTextarea = styled.textarea`
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem;

  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  &:focus {
    border-color: var(--Main);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.8rem;

  font-size: 1.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const CommentDate = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.8rem;
  margin-bottom: 0.8rem;

  font-size: 1.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const CommentContent = styled.div`
  margin: 0.6rem 0 1.2rem 0;

  display: flex;
  justify-content: flex-start;
`;

const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.2rem;
`;

const Edit = styled.button`
  color: var(--Gray9f);
  font-size: 1.2rem;
  text-decoration-line: underline;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

const Delete = styled.button`
  color: var(--Gray9f);
  font-size: 1.2rem;
  text-decoration-line: underline;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
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
