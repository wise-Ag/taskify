import Image from "next/image";
import styled from "styled-components";
import addBox from "@/assets/icons/add-box.svg";
import settings from "@/assets/icons/settings.svg";
import { DeviceSize } from "@/styles/DeviceSize";

interface ButtonProps {
  src: string;
  type: string;
}

function Button({ src, type }: ButtonProps) {
  return (
    <StyledButton>
      <Icon src={src} alt="버튼 아이콘" />
      <ButtonType>{type}</ButtonType>
    </StyledButton>
  );
}

function DashboardButtons() {
  return (
    <Wrapper>
      <Button src={settings} type="관리" />
      <Button src={addBox} type="초대하기" />
    </Wrapper>
  );
}

export default DashboardButtons;

const StyledButton = styled.button`
  height: 4rem;

  padding: 1rem 1.6rem;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border-radius: 0.8rem;
  border: 1px solid var(--Gray30);
  background: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    height: 3rem;
    padding: 0.7rem 1.2rem;
  }
`;

const Icon = styled(Image)`
  width: 2rem;
  height: 2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const ButtonType = styled.p`
  color: var(--Gray50);
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  @media (max-width: ${DeviceSize.mobile}) {
    gap: 0.6rem;
  }
`;
