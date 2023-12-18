import styled from "styled-components";
import Image from "next/image";
import Circle from "@/assets/icons/circle.svg";
import { DeviceSize } from "@/styles/DeviceSize";

interface ColumnNameProps {
  status: string;
}

function ColumnName({ status }: ColumnNameProps) {
  return (
    <Container>
      <Image src={Circle} alt="circle" width={6} height={6} />
      <Text>{status}</Text>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.4rem 0.8rem;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  border-radius: 11px;
  background: var(--Violet8);
`;

const Text = styled.span`
  color: var(--Violet);
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

export default ColumnName;
