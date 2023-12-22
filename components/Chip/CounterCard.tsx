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

  border-radius: 4px;
  background: var(--Grayee);
`;

const Number = styled.span`
  color: var(--Gray78);
  text-align: center;
  font-size: 1.2rem;
`;

export default CounterCard;
