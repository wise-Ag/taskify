import CircleIcon from "@/assets/icons/circle.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

const ColumnName = ({ status }: { status: string }) => {
  return (
    <Container>
      <CircleIcon alt="circle" width={6} height={6} />
      <Text>{status}</Text>
    </Container>
  );
};

export default ColumnName;

const Container = styled.div`
  padding: 0.4rem 0.8rem;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  border-radius: 11px;
  background: var(--MainLight);
`;

const Text = styled.span`
  color: var(--Main);
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
