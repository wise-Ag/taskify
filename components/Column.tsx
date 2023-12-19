import instance from "@/api/axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import ColumnHeader from "./ColumnHeader";
import { MOCK_DATA } from "./Columns";

interface ColumnProps {
  columnId: number;
  title: string;
}
export interface getCardsResponse {
  assignee: { id: number; nickname: string; profileImageUrl: string | null };
  columnId: number;
  createdAt: string;
  dashboardId: number;
  description: string;
  dueDate: string;
  id: number;
  imageUrl: string;
  tags: string[];
  teamId: string;
  title: string;
  updatedAt: string;
}
function Column({ columnId, title }: ColumnProps) {
  const [cards, setCards] = useState<getCardsResponse[]>([]);

  const getCards = async () => {
    const res = await instance.get("/cards", {
      params: {
        columnId,
      },
      headers: {
        Authorization: `Bearer ${MOCK_DATA.token}`,
      },
    });
    const cards = res.data.cards;
    setCards(() => {
      return [...cards];
    });
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <ColumnHeader title={title} columnId={columnId} count={cards.length} />
      {cards.map((card) => {
        return <Card key={card.id} cardData={card} />;
      })}
    </>
  );
}

export default Column;
