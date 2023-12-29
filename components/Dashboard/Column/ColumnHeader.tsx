import CircleIcon from "@/assets/icons/blue-circle.svg";
import SettingIcon from "@/assets/icons/settings.svg";
import CounterCard from "@/components/common/Chip/CounterCard";
import styled from "styled-components";
import KebabModal from "@/components/Modal/KebabModal";
import { useState } from "react";

interface ColumnHeaderProps {
  title: string;
  columnId: number;
  count: number;
}

const ColumnHeader = ({ title, count }: ColumnHeaderProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Content>
        <StyledCircleIcon alt="circle" width={6} height={6} />
        <Title>{title}</Title>
        <CounterCard number={count} />
      </Content>
      <Div>
        <SettingIcon onClick={handleClick} style={{ cursor: "pointer" }} />
        {isClicked && <KebabModal />}
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
`;

const StyledCircleIcon = styled(CircleIcon)`
  circle {
    fill: var(--Main);
  }
`;

const Div = styled.div`
  position: relative;
`;
