import { getCardList } from "@/api/cards";
import Card from "@/components/Dashboard/Card/Card";
import ColumnHeader from "@/components/Dashboard/Column/ColumnHeader";
import AddTaskModal from "@/components/Modal/AddTaskModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useModal } from "@/hooks/useModal";
import { cardsAtom, cardsTotalCountAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ColumnProps {
  columnId: number;
  title: string;
}

const PAGE_SIZE = 10;

const Column = ({ columnId, title }: ColumnProps) => {
  const [cards, setCards] = useAtom(cardsAtom);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [cardsTotalCount, setCardsTotalCount] = useAtom(cardsTotalCountAtom);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const columnCards = cards[columnId] || [];

  const loadCardList = async () => {
    if (columnCards.length > 0 && cursorId == null) return;

    setIsLoading(true);

    const res = await getCardList({
      cursorId,
      columnId,
      size: PAGE_SIZE,
      token: localStorage.getItem("accessToken"),
    });

    if (res) {
      setCursorId(res.cursorId);
      setCards((prevCards) => ({
        ...prevCards,
        [columnId]: [...columnCards, ...res.cards],
      }));
      setCardsTotalCount((prev) => {
        return { ...prev, [columnId]: res.totalCount };
      });
    }
    setIsLoading(false);
  };
  const { targetRef, setIsLoading } = useInfiniteScroll({ callbackFunc: loadCardList });
  useEffect(() => {
    loadCardList();
  }, []);

  return (
    <Wrapper>
      <ColumnHeader title={title} columnId={columnId} count={cardsTotalCount[columnId]} />
      <Container>
        <Button
          type="plus"
          onClick={() => {
            openModalFunc();
          }}
        />
        {isModalOpen && (
          <ModalWrapper>
            <AddTaskModal closeModalFunc={closeModalFunc} columnId={columnId} />
          </ModalWrapper>
        )}
        {columnCards.map((card) => (
          <div key={card.id}>
            <Card columnId={columnId} cardData={card} columnTitle={title} />
            {card.id === cursorId && <div ref={targetRef} />}
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.div`
  padding: 2rem;
  border-right: 1px solid var(--Grayd9);

  min-width: fit-content;
  height: 100vh;

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
