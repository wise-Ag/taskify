import CalenderIcon from "@/assets/icons/calender.svg";
import Tag from "@/components/common/Chip/Tag";
import NoProfileImage from "@/components/common/NoProfileImage/ProfileImage";
import { DeviceSize } from "@/styles/DeviceSize";
import { formatDate } from "@/utils/FormatDate";
import styled from "styled-components";
import { Card } from "@/api/cards/cards.types";

const Card = ({ cardData }: { cardData: Card }) => {
  return (
    <Wrapper>
      {cardData.imageUrl && <CardImage $cardimage={cardData.imageUrl || null} />}
      <Title $imageurl={cardData.imageUrl}>{cardData.title}</Title>
      {cardData.tags[0] && (
        <Tags>
          {cardData.tags.map((tag, idx) => {
            return (
              <Tag key={idx} $bgColor="--Pinkf7" $textColor="--Pinkd5">
                {tag}
              </Tag>
            );
          })}
        </Tags>
      )}
      <Date>
        <CalenderIcon /> {formatDate(cardData.createdAt)}
      </Date>
      <div style={{ position: "absolute", right: "2rem", bottom: "2rem" }}>
        {cardData.assignee.profileImageUrl ? (
          <ProfileImage url={cardData.assignee.profileImageUrl} />
        ) : (
          <NoProfileImageWrapper>
            <NoProfileImage id={cardData.assignee.id} nickname={cardData.assignee.nickname} />
          </NoProfileImageWrapper>
        )}
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 31.4rem;

  padding: 2rem;
  border-radius: 6px;
  border: 1px solid var(--Grayd9);

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: center;

  background-color: var(--White);

  cursor: pointer;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 54.4rem;
    height: 11rem;

    display: block;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 28.4rem;
    height: auto;

    display: flex;
    gap: 0.8rem;
    flex-direction: column;
  }
`;

const CardImage = styled.div<{ $cardimage: string | null }>`
  width: 27.4rem;
  height: 16rem;

  border-radius: 6px;

  background-image: url(${(props) => props.$cardimage || ""});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 20%;
    height: 100%;
    float: left;

    margin-right: 2rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: 15rem;
    float: none;

    margin: 0;
  }
`;

const Title = styled.div<{ $imageurl: string }>`
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.tablet}) {
    width: ${(props) => (props.$imageurl ? "75%" : "100%")};
    height: 50%;
    float: left;

    justify-self: center;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;
    float: none;

    font-size: 1.4rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    height: 50%;

    margin-right: 1.6rem;

    align-items: end;
    float: left;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const Date = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: var(--Gray78);

  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.tablet}) {
    width: auto;
    height: 50%;

    align-items: end;
    float: left;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;

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
