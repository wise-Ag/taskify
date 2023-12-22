import instance from "@/api/axios";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ColumnHeader from "@/components/Column/ColumnHeader";
import { MOCK_DATA } from "@/components/Column/Columns";
import Button from "@/components/button/Button";
import { DeviceSize } from "@/styles/DeviceSize";

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

const Column = ({ columnId, title }: ColumnProps) => {
  const [cards, setCards] = useState<getCardsResponse[]>([]);

  useEffect(() => {
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
    getCards();
  }, []);

  return (
    <Wrapper>
      <ColumnHeader title={title} columnId={columnId} count={cards.length} />
      <Container>
        <Button type="plus" disabled />
        {cards.map((card) => {
          return <Card key={card.id} cardData={card} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.div`
  padding: 2rem;
  border-right: 1px solid var(--Grayd9);

  display: flex;
  flex-direction: column;

  @media (max-width: ${DeviceSize.tablet}) {
    border-bottom: 1px solid var(--Grayd9);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
