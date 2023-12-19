import styled from "styled-components";
import Image from "next/image";
import addFillo from "@/assets/icons/add-fillo.svg";
import { DeviceSize } from "@/styles/DeviceSize";

function AddColumn() {
  return (
    <Container>
      <Image src={addFillo} alt="add" width={16} height={16} />
    </Container>
  );
}

const Container = styled.div`
  width: 2.2rem;
  height: 2.2rem;

  padding: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 4px;
  background: var(--Violet8);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 2rem;
    height: 2rem;

    padding: 0.27rem;
  }
`;

export default AddColumn;
