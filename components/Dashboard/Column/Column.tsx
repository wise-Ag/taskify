import { getCardList } from "@/api/cards";
import Card from "@/components/Dashboard/Card/Card";
import ColumnHeader from "@/components/Dashboard/Column/ColumnHeader";
import AddTaskModal from "@/components/Modal/AddTaskModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import { useModal } from "@/hooks/useModal";
import { cardsAtom, cardsTotalCountAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useEffect } from "react";
import styled from "styled-components";

interface ColumnProps {
  columnId: number;
  title: string;
}

const Column = ({ columnId, title }: ColumnProps) => {
  const [cards, setCards] = useAtom(cardsAtom);
  const [cardsTotalCount, setCardsTotalCount] = useAtom(cardsTotalCountAtom);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleCloseModal = () => {
    closeModalFunc();
  };

  useEffect(() => {
    const loadCardList = async () => {
      const res = await getCardList({
        cursorId: null,
        columnId,
        token: localStorage.getItem("accessToken"),
      });

      if (res) {
        setCards((prevCards) => ({
          ...prevCards,
          [columnId]: res.cards,
        }));
        setCardsTotalCount((prev) => {
          return { ...prev, [columnId]: res.totalCount };
        });
      }
    };

    loadCardList();
  }, []);

  const columnCards = cards[columnId] || [];

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
          <Card key={card.id} columnId={columnId} cardData={card} columnTitle={title} />
        ))}
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
