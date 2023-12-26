import CircleIcon from "@/assets/icons/blue-circle.svg";
import SettingIcon from "@/assets/icons/settings.svg";
import CounterCard from "@/components/common/Chip/CounterCard";
import styled from "styled-components";

interface ColumnHeaderProps {
  title: string;
  columnId: number;
  count: number;
}

const ColumnHeader = ({ title, count }: ColumnHeaderProps) => {
  return (
    <Wrapper>
      <Content>
        <CircleIcon />
        <Title>{title}</Title>
        <CounterCard number={count} />
      </Content>
      <SettingIcon style={{ cursor: "pointer" }} />
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
