import styled from "styled-components";
import AlertModal from "./AlertModal";

interface ModalProps {
  modalType: "alert" | "newDashBoard" | "todo" | "newColumn" | "manageColumn";
}

function ModalContainer({ modalType }: ModalProps) {
  return (
    <Wrapper>
      <AlertModal type="incorrect" />
      {/* <Button /> */}
    </Wrapper>
  );
}

export default ModalContainer;

const Wrapper = styled.div`
  padding: 3.2rem 2.8rem;
  border-radius: 0.8rem;
  background: var(--White);
`;
