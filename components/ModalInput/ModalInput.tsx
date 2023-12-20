import Button from "@/components/Button/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import { ko } from "date-fns/locale";
import React, { ChangeEvent, forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

interface ModalInputProps {
  label: string;
  inputType: "댓글" | "제목" | "마감일";
}

interface InputAreaProps {
  inputType: "댓글" | "제목" | "마감일";
}

interface LabelProps {
  inputType: "댓글" | "제목" | "마감일";
}

function CustomDatePicker() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <StyledDatePicker
      locale={ko}
      dateFormat="yyyy.MM.dd h:mm aa"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      // placeholderText="날짜를 입력해 주세요"
      showIcon
      showTimeInput
    />
  );
}

const ModalInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement, // ref의 타입
  ModalInputProps // props의 타입
>(({ label, inputType }, ref) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const renderInput = () => {
    switch (inputType) {
      case "댓글":
        return (
          <>
            <StyledTextArea ref={ref as React.Ref<HTMLTextAreaElement>} value={inputValue} onChange={handleInputChange} placeholder={"댓글 작성하기"} />
            <PositionedButton>
              <Button type="modalInput">입력</Button>
            </PositionedButton>
          </>
        );
      case "제목":
        return (
          <>
            <StyledInput ref={ref as React.Ref<HTMLInputElement>} type="text" value={inputValue} onChange={handleInputChange} placeholder={"제목을 입력해 주세요"} required />
          </>
        );
      case "마감일":
        return (
          <>
            <CustomDatePicker />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <InputBox>
      <Label inputType={inputType}>
        {label}
        {inputType === "제목" && <RequiredIndicator>*</RequiredIndicator>}
      </Label>

      <InputArea inputType={inputType}>{renderInput()}</InputArea>
    </InputBox>
  );
});

export default ModalInput;

const InputBox = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label<LabelProps>`
  margin-bottom: 1rem;

  font-size: ${(props) => (props.inputType === "댓글" ? "1.6rem" : "1.8rem")};
  color: var(--Black33);

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;

const InputArea = styled.div<InputAreaProps>`
  width: ${(props) => (props.inputType !== "댓글" ? "34rem" : "45rem")};
  height: ${(props) => (props.inputType !== "댓글" ? "4.8rem" : "11rem")};

  padding: ${(props) => (props.inputType !== "댓글" ? "1.4rem" : "1.6rem")};
  gap: 1rem;
  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  position: relative;
  display: flex;
  align-items: flex-start;

  &:focus-within {
    border-color: ${(props) => (props.inputType === "댓글" ? "var(--Main)" : "var(--Grayd9)")};
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: ${(props) => (props.inputType === "댓글" ? "28.7rem" : "34rem")};
    height: ${(props) => (props.inputType === "댓글" ? "7rem" : "4.8rem")};

    padding: ${(props) => (props.inputType === "댓글" ? "1.2rem" : "1.4rem")};
    gap: ${(props) => (props.inputType === "댓글" ? "0.8rem" : "1rem")};
  }
`;

const StyledTextArea = styled.textarea`
  border: none;

  color: var(--Grayd9);

  flex-grow: 1;
  resize: none;

  &:focus {
    outline: none;
    color: var(--Black33);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const PositionedButton = styled.div`
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
`;

const RequiredIndicator = styled.span`
  margin-left: 0.3rem;

  color: var(--Main);
  font-size: 1.8rem;
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;

  background-color: transparent;
  color: var(--Grayd9);

  &:focus {
    outline: none;
    color: var(--Black33);
  }
`;

const StyledInput = styled.input`
  border: none;

  color: var(--Grayd9);
  flex-grow: 1;

  &:focus {
    outline: none;
    color: var(--Black33);
  }
`;
