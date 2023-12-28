import { getCardList } from "@/api/cards";
import Card from "@/components/Dashboard/Card/Card";
import ColumnHeader from "@/components/Dashboard/Column/ColumnHeader";
import Button from "@/components/common/Buttons/Button";
import { useScroll } from "@/hooks/useScroll";
import { DeviceSize } from "@/styles/DeviceSize";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

const columnId = 866;
const title = "test";

const Column = () => {
  const [cards, setCards] = useState<getCardsResponse[]>([]);
  const { observe, unobserve, targetRef, loadData } = useScroll();
  const [cursorId, setCursorId] = useState(null);
  const [totalCount, setTotalCount] = useState(1);

  const loadCards = async () => {
    if (cards.length === totalCount) {
      unobserve();
      return;
    }

    const res = await getCardList({
      size: 6,
      cursorId,
      columnId,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM2NTMyNzQsImlzcyI6InNwLXRhc2tpZnkifQ.VwBZXDXTTTIdvLRS8TEegWwGDarzdYuTyD40zZZ6Fs4",
    });
    const card = res?.cards;
    setCards((prev) => {
      return [...prev, ...card];
    });
    setCursorId(res?.cursorId);
    setTotalCount(res?.totalCount);
    observe();
  };

  useEffect(() => {
    loadCards();
  }, [loadData]);

  return (
    <Wrapper>
      <ColumnHeader title={title} columnId={columnId} count={cards.length} />
      <Container>
        <Button type="plus" disabled />
        {cards.map((card) => {
          return <Card key={card.id} cardData={card} />;
        })}
        <div ref={targetRef} />
      </Container>
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.div`
  padding: 2rem;
  height: 80rem;
  width: fit-content;
  border-right: 1px solid var(--Grayd9);
  overflow-y: auto;
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
