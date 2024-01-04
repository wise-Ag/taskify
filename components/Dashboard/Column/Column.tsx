import { getCardList } from "@/api/cards";
import Card from "@/components/Dashboard/Card/Card";
import ColumnHeader from "@/components/Dashboard/Column/ColumnHeader";
import AddTaskModal from "@/components/Modal/AddTaskModal";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Button from "@/components/common/Buttons/Button";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useInfiniteScrollNavigator } from "@/hooks/useInfiniteScrollNavigator";
import { useModal } from "@/hooks/useModal";
import { cardsAtom, cardsTotalCountAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { FaArrowUpWideShort } from "react-icons/fa6";
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
  const [isHovered, setIsHovered] = useState(false); //스크롤바 커스텀
  const scrollContainerRef = useRef(null);
  const { startRef, endRef, handleScrollNavClick, isScrollingUp } = useInfiniteScrollNavigator(scrollContainerRef);

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

  //스크롤바 커스텀
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    loadCardList();
  }, []);

  return (
    <Wrapper ref={scrollContainerRef} className={`${isHovered ? "show-scrollbar" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ColumnHeader title={title} columnId={columnId} count={cardsTotalCount[columnId]} />
      <Container ref={startRef}>
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
      <div ref={endRef} />
      {PAGE_SIZE < columnCards.length && (
        <ScrollNavigateButton onClick={() => handleScrollNavClick()}>
          <ScrollNavigateIcon $isScrollingUp={isScrollingUp} />
        </ScrollNavigateButton>
      )}
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.div`
  min-width: fit-content;
  height: calc(100vh - 7rem);

  padding: 2rem;
  border-right: 1px solid var(--Grayd9);

  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 35.5rem;
    height: 100%;
    max-height: 50rem;

    border-bottom: 1px solid var(--Grayd9);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 30.8rem;
  }

  &.show-scrollbar {
    overflow-y: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ScrollNavigateButton = styled.div`
  position: sticky;
  bottom: 0;
  left: 100rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border-radius: 1.5rem;

  cursor: pointer;

  background-color: var(--MainHover);
`;

const ScrollNavigateIcon = styled(FaArrowUpWideShort)<{ $isScrollingUp: boolean }>`
  width: 2.5rem;
  height: 3.5rem;

  ${(props) => props.$isScrollingUp && " transform: scaleY(-1)"};

  fill: var(--Main);
`;
