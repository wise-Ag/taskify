import { getCardsResponse } from "./Column";
import Image from "next/image";
import calenderIcon from "@/assets/icons/calender.svg";

function Card({ cardData }: { cardData: getCardsResponse }) {
  return (
    <>
      <div>{cardData.title}</div>
      <div>
        {cardData.tags &&
          cardData.tags.map((tag) => {
            return <div>tag chip</div>;
          })}
      </div>
      <div>
        <Image src={calenderIcon} alt="calenderIcon" /> {cardData.createdAt}
      </div>
      {cardData.assignee.profileImageUrl && <Image src={cardData.assignee.profileImageUrl} alt="profileImage" />}
    </>
  );
}
export default Card;
