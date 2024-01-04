import { Z_INDEX } from "@/styles/ZindexStyles";
import { useEffect } from "react";
import { styled } from "styled-components";

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ModalWrapper;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${Z_INDEX.ModalWrapper};
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
