import Settings from "@/assets/icons/settings.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";

const SettingButton = () => {
  return (
    <StyledButton>
      <StyledIcon />
      <ButtonType>관리</ButtonType>
    </StyledButton>
  );
};

export default SettingButton;

const StyledButton = styled.button`
  height: 4rem;

  padding: 1rem 1.6rem;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border-radius: 0.8rem;
  border: 1px solid var(--Grayd9);
  background: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    height: 3rem;
    padding: 0.7rem 1.2rem;
  }
`;

const StyledIcon = styled(Settings)`
  width: 2rem;
  height: 2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    display: none;
  }
`;

const ButtonType = styled.p`
  color: var(--Gray78);
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2em;
  }
`;
