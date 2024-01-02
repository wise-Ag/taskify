import Button from "@/components/common/Buttons/Button";
import { dueDateAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import React, { forwardRef, useState } from "react";
import styled from "styled-components";

interface ModalInputProps {
  $inputType: "댓글" | "제목" | "마감일" | "설명";
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputAreaProps {
  $inputType: "댓글" | "제목" | "마감일" | "설명";
}

interface DateInputProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

const ModalInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, ModalInputProps & { onSubmitComment?: () => void }>(
  ({ label, $inputType, onSubmitComment, value, onChange }, ref) => {
    const renderInput = () => {
      switch ($inputType) {
        case "댓글":
        case "설명":
          return (
            <>
              <StyledTextArea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                value={value}
                onChange={onChange}
                placeholder={$inputType === "댓글" ? "댓글 작성하기" : "설명을 입력해 주세요"}
                $inputType={$inputType}
                required={$inputType === "설명"}
              />
              {$inputType === "댓글" && (
                <PositionedButton>
                  <Button type="modalInput" onClick={onSubmitComment} disabled={!value.trim()}>
                    입력
                  </Button>
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
                value={value}
                onChange={onChange}
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
  },
);

export default ModalInput;

const CustomDatePicker = () => {
  const [dates, setDates] = useState<Dayjs | null>(null);
  const [, setDueDate] = useAtom(dueDateAtom);

  const handleDateChange = (newVal: Dayjs | null) => {
    setDates(newVal);
    if (newVal) {
      const formattedDate = newVal.format("YYYY-MM-DD HH:mm");
      setDueDate(formattedDate);
    } else {
      setDueDate("");
    }
  };

  return (
    <DatePickerWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          sx={{
            ".MuiInputBase-root": {
              outline: "none",
              fontSize: "1.6rem",
              color: "var(--Black33)",
              height: "4.8rem",
              "@media (max-width: ${DeviceSize.mobile})": {
                fontSize: "1.4rem",
              },
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            width: 1,
            border: "none",
          }}
          value={dates}
          disablePast
          closeOnSelect
          format="YYYY-MM-DD HH:mm"
          onChange={handleDateChange}
          slotProps={{ textField: { placeholder: "날짜를 입력해 주세요." } }}
        />
      </LocalizationProvider>
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
  width: 100%;
  height: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "11rem" : "4.8rem")};

  padding: ${(props) => (props.$inputType === "댓글" || props.$inputType === "설명" ? "1.6rem" : "1.4rem")};
  gap: 1rem;
  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  position: relative;
  display: flex;
  align-items: flex-start;

  background-color: var(--White);

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

  background-color: var(--White);

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
  width: 100%;

  position: absolute;
  top: 0rem;
  left: -0.1rem;
`;

const StyledInput = styled.input<InputAreaProps>`
  border: none;

  flex-grow: 1;

  font-size: 1.6rem;

  &:focus {
    outline: none;

    color: var(--Black33);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;
