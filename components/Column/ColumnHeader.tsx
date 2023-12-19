import circleIcon from "@/assets/icons/blue-circle.svg";
import settingIcon from "@/assets/icons/settings.svg";
import Image from "next/image";
import styled from "styled-components";
import CounterCard from "@/components/Chip/CounterCard";

interface ColumnHeaderProps {
  title: string;
  columnId: number;
  count: number;
}
function ColumnHeader({ title, columnId, count }: ColumnHeaderProps) {
  return (
    <Wrapper>
      <Content>
        <Image src={circleIcon} alt="Circle Icon" />
        <Title>{title}</Title>
        <CounterCard number={count} />
      </Content>
      <Image src={settingIcon} alt="setting Icon" />
    </Wrapper>
  );
}

export default ColumnHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;
