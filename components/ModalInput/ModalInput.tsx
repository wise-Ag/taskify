import Button from "@/components/button/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import { ko } from "date-fns/locale";
import React, { ChangeEvent, forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

interface ModalInputProps {
  label: string;
  $inputType: "댓글" | "제목" | "마감일" | "설명";
}

interface InputAreaProps {
  $inputType: "댓글" | "제목" | "마감일" | "설명";
}

const ModalInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement, // ref의 타입
  ModalInputProps // props의 타입
>(({ label, $inputType }, ref) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const renderInput = () => {
    switch ($inputType) {
      case "댓글":
      case "설명":
        return (
          <>
            <StyledTextArea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              value={inputValue}
              onChange={handleInputChange}
              placeholder={$inputType === "댓글" ? "댓글 작성하기" : "설명을 입력해 주세요"}
              $inputType={$inputType}
              required={$inputType === "설명"}
            />
            {$inputType === "댓글" && (
              <PositionedButton>
                <Button type="modalInput">입력</Button>
              </PositionedButton>
            )}
          </>
        );
      case "제목":
        return (
          <>
            <StyledInput
              ref={ref as React.Ref<HTMLInputElement>}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={"제목을 입력해 주세요"}
              $inputType={$inputType}
              required
            />
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
      <Label $inputType={$inputType}>
        {label}
        {$inputType === "제목" || $inputType === "설명" ? <RequiredIndicator>*</RequiredIndicator> : null}
      </Label>
      <InputArea $inputType={$inputType}>{renderInput()}</InputArea>
    </InputBox>
  );
});

export default ModalInput;

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePickerWrapper>
      <StyledDatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd h:mm aa"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeInputLabel="Time:"
        showIcon
        showTimeInput
        icon={
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="calendar_today_FILL0_wght300_GRAD0_opsz24 8">
              <path
                id="Vector"
                d="M3.98077 16.1256C3.60193 16.1256 3.28125 15.9943 3.01875 15.7318C2.75625 15.4693 2.625 15.1486 2.625 14.7698V4.73137C2.625 4.35252 2.75625 4.03184 3.01875 3.76934C3.28125 3.50684 3.60193 3.37559 3.98077 3.37559H5.01924V2.36596C5.01924 2.20155 5.07429 2.06429 5.18439 1.95419C5.29448 1.84411 5.43174 1.78906 5.59616 1.78906C5.76058 1.78906 5.89783 1.84411 6.00793 1.95419C6.11802 2.06429 6.17306 2.20155 6.17306 2.36596V3.37559H11.8557V2.35154C11.8557 2.19193 11.9096 2.05828 12.0173 1.95059C12.125 1.84291 12.2586 1.78906 12.4182 1.78906C12.5778 1.78906 12.7115 1.84291 12.8192 1.95059C12.9269 2.05828 12.9807 2.19193 12.9807 2.35154V3.37559H14.0192C14.398 3.37559 14.7187 3.50684 14.9812 3.76934C15.2437 4.03184 15.375 4.35252 15.375 4.73137V14.7698C15.375 15.1486 15.2437 15.4693 14.9812 15.7318C14.7187 15.9943 14.398 16.1256 14.0192 16.1256H3.98077ZM3.98077 15.0006H14.0192C14.0769 15.0006 14.1298 14.9765 14.1779 14.9285C14.2259 14.8804 14.25 14.8275 14.25 14.7698V7.73137H3.74998V14.7698C3.74998 14.8275 3.77402 14.8804 3.82209 14.9285C3.87018 14.9765 3.92308 15.0006 3.98077 15.0006ZM3.74998 6.60639H14.25V4.73137C14.25 4.67367 14.2259 4.62078 14.1779 4.57269C14.1298 4.52461 14.0769 4.50058 14.0192 4.50058H3.98077C3.92308 4.50058 3.87018 4.52461 3.82209 4.57269C3.77402 4.62078 3.74998 4.67367 3.74998 4.73137V6.60639Z"
                fill="#9fa6b2"
              />
            </g>
          </svg>
        }
      />
    </DatePickerWrapper>
  );
};

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<InputAreaProps>`
  margin-bottom: 1rem;

  font-size: ${(props) => (props.$inputType === "댓글" ? "1.6rem" : "1.8rem")};
  color: var(--Black33);

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: ${(props) => (props.$inputType === "댓글" ? "1.4rem" : "1.6rem")};
  }
`;

const InputArea = styled.div<InputAreaProps>`
  height: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "11rem" : "4.8rem")};

  padding: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "1.6rem" : "1.4rem")};
  gap: 1rem;
  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  position: relative;
  display: flex;
  align-items: flex-start;

  &:focus-within {
    border-color: ${(props) => (props.$inputType === "댓글" ? "var(--Main)" : "var(--Grayd9)")};
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "7rem" : "4.8rem")};

    padding: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "1.2rem" : "1.4rem")};
    gap: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "0.8rem" : "1rem")};
  }
`;

const StyledTextArea = styled.textarea<InputAreaProps>`
  border: none;

  flex-grow: 1;
  resize: none;

  font-size: ${(props) => (props.$inputType === "댓글" ? "1.4rem" : "1.6rem")};
  color: var(--Gray9f);

  &:focus {
    outline: none;
    color: var(--Black33);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: ${(props) => (props.$inputType === "댓글" ? "1.2rem" : "1.4rem")};
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
`;

const DatePickerWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;

  color: var(--Gray9f);

  &:focus {
    outline: none;
    color: var(--Black33);
  }
`;

const StyledInput = styled.input<InputAreaProps>`
  border: none;

  flex-grow: 1;

  font-size: 1.6rem;
  color: var(--Gray9f);

  &:focus {
    outline: none;

    color: var(--Black33);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
