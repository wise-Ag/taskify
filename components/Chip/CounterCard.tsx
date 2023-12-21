import styled from "styled-components";

interface CounterCardProps {
  number: number;
}

function CounterCard({ number }: CounterCardProps) {
  return (
    <Container>
      <Number>{number}</Number>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.3rem 0.6rem;
  gap: 0.1rem;
  border-radius: 4px;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--Grayee);
`;

const Number = styled.span`
  color: var(--Gray78);
  text-align: center;
  font-size: 1.2rem;
`;

export default CounterCard;
