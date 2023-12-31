import { getCardList } from "@/api/cards";
import { Card as CardData } from "@/api/cards/cards.types";
import Card from "@/components/Dashboard/Card/Card";
import ColumnHeader from "@/components/Dashboard/Column/ColumnHeader";
import AddTaskModal from "@/components/Modal/AddTaskModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import { useModal } from "@/hooks/useModal";
import { DeviceSize } from "@/styles/DeviceSize";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ColumnProps {
  columnId: number;
  title: string;
}

const Column = ({ columnId, title }: ColumnProps) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleCloseModal = () => {
    closeModalFunc();
  };

  useEffect(() => {
    const loadCardList = async () => {
      const res = await getCardList({
        size: 10,
        cursorId: null,
        columnId,
        token: localStorage.getItem("accessToken"),
      });

      if (res !== null) {
        setCards(res?.cards);
      }
    };

    loadCardList();
  }, [columnId, isModalOpen]);

  return (
    <Wrapper>
      <ColumnHeader title={title} columnId={columnId} count={cards.length} />
      <Container>
        <Button
          type="plus"
          onClick={() => {
            openModalFunc();
          }}
        />
        {isModalOpen && (
          <ModalWrapper>
            <AddTaskModal />
          </ModalWrapper>
        )}
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
