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

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  background: var(--Gray20);
  border-radius: 4px;
`;

const Number = styled.span`
  color: var(--Gray50);
  text-align: center;
  font-size: 1.2rem;
`;

export default CounterCard;
