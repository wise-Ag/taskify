import instance from "@/api/axios";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import styled from "styled-components";
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
    <Wrapper>
      <ColumnHeader title={title} columnId={columnId} count={cards.length} />
      <Container>
        <button>+</button>
        {cards.map((card) => {
          return <Card key={card.id} cardData={card} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default Column;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-left: 0.1rem solid var(--Gray30);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
