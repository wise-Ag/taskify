import Input from "@/components/Sign/SignInput/Input";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import ColorSelector from "@/components/common/Chip/DashBoardColor";
import { DeviceSize } from "@/styles/DeviceSize";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

interface ModalProps {
  title: "새 컬럼 생성" | "컬럼 관리" | "새로운 대시보드";
  label: "이름" | "대시보드 이름";
  buttonType: "생성" | "변경";
  boardid?: number;
  columnId?: number;
  onClose?: () => void;
  onAdd?: () => void;
  onSubmit: (data: any) => Promise<void>;
  rules: {};
}

const ModalContainer = ({ title, label, buttonType, onClose, onAdd, onSubmit, rules }: ModalProps) => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { newTitle: "" },
    mode: "onBlur",
  });

  return (
    <Wrapper>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Controller
            control={control}
            name="newTitle"
            rules={rules}
            render={({ field, fieldState }) => (
              <Input label={label} {...field} placeholder={`${label}을 입력하세요`} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
            )}
          />
        </InputWrapper>
        {title === "새로운 대시보드" && (
          <ColorSelectorWrapper>
            <ColorSelector />
          </ColorSelectorWrapper>
        )}
        <ButtonWrapper>
          <ButtonSet type="modalSet" onClickLeft={onClose} onClickRight={onAdd} isDisabled={!formState.isValid}>
            {buttonType}
          </ButtonSet>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};

export default ModalContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 54rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;

    padding: 2.8rem 2rem 2.8rem 2rem;

    border-radius: 8px;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const InputWrapper = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

const NameType = styled.label`
  color: var(--Black33);

  font-size: 1.8rem;
  font-weight: 500;
`;

const NameInputBox = styled.input`
  width: 100%;
  height: 4.8rem;

  border: 1px solid var(--Grayd9);
  padding: 1.5rem 1.6rem 1.4rem 1.6rem;
  border-radius: 6px;

  font-size: 1.6rem;
  font-weight: 400;

  &:focus {
    outline: none;
    border-color: var(--Main);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: 4.2rem;

    border-radius: 8px;
  }
`;

const ColorSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 2.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
