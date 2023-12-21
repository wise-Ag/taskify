import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import Tag from "../Chip/Tag";

function TagInput() {
  const [inputValue, setInputValue] = useState("");
  const [tagValue, setTagValue] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handlePressEnter = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
    if (event.nativeEvent.isComposing) return;
    if (!inputValue) return;
    if (tagValue.filter((v) => v == inputValue).length === 0) setTagValue((prev) => [...prev, inputValue]);
    setInputValue(() => "");
  };

  const handleDeleteTag = (event: Event) => {
    setTagValue((prev) => prev.filter((v) => v !== event?.target?.textContent));
  };

  const setTag = () => {
    return (
      <TagArea>
        {tagValue.map((tag) => {
          return (
            <div style={{ cursor: "pointer" }} onClick={handleDeleteTag as unknown as React.MouseEventHandler<HTMLDivElement>}>
              <Tag key={tag} bgColor="--Pinkf7" textColor="--Pinkd5">
                {tag}
              </Tag>
            </div>
          );
        })}
      </TagArea>
    );
  };

  const renderInput = () => {
    return (
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={"입력 후 Enter"}
        onKeyDown={handlePressEnter as unknown as React.KeyboardEventHandler<HTMLInputElement>}
      />
    );
  };

  return (
    <InputBox>
      <Label>태그</Label>
      <InputArea>
        {setTag()}
        {renderInput()}
      </InputArea>
    </InputBox>
  );
}

export default TagInput;

const InputBox = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 1rem;

  font-size: 1.6rem;
  color: var(--Black33);

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;

const InputArea = styled.div`
  width: 34rem;
  height: 4.8rem;

  padding: 1.4rem;
  gap: 1rem;
  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  position: relative;
  display: flex;
  align-items: flex-start;

  &:focus-within {
    border-color: var(--Main);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 34rem;
    height: 4.8rem;

    padding: 1.4rem;
    gap: 1rem;
  }
`;

const StyledInput = styled.input`
  width: 30%;

  border: none;

  color: var(--Grayd9);
  flex-grow: 1;

  &:focus {
    outline: none;
    color: var(--Black33);
  }
`;

const TagArea = styled.div`
  display: flex;
  gap: 0.8rem;

  max-width: 70%;
  height: 3rem;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 0.4rem;
    border-radius: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #a0cb9b;
    border-radius: 0.6rem;
  }
`;
