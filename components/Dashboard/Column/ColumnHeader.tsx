import CircleIcon from "@/assets/icons/blue-circle.svg";
import SettingIcon from "@/assets/icons/settings.svg";
import CounterCard from "@/components/common/Chip/CounterCard";
import styled from "styled-components";
import KebabModal from "@/components/Modal/KebabModal";
import { useRef, useEffect, useState } from "react";
import { DeviceSize } from "@/styles/DeviceSize";

interface ColumnHeaderProps {
  title: string;
  columnId: number;
  count: number;
}

const ColumnHeader = ({ title, count, columnId }: ColumnHeaderProps) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsKebabOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsKebabOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Wrapper>
      <Content>
        <StyledCircleIcon alt="circle" width={6} height={6} />
        <Title>{title}</Title>
        <CounterCard number={count} />
      </Content>
      <Div ref={modalRef}>
        <SettingIcon onClick={handleClick} style={{ cursor: "pointer" }} />
        {isKebabOpen && <KebabModal columnId={columnId} setIsKebabOpen={setIsKebabOpen} />}
      </Div>
    </Wrapper>
  );
};

export default ColumnHeader;

const Wrapper = styled.div`
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.6rem;
  }
`;

const StyledCircleIcon = styled(CircleIcon)`
  circle {
    fill: var(--Main);
  }
`;

const Div = styled.div`
  position: relative;
`;
