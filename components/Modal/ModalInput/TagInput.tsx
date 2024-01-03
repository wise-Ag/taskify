import Tag from "@/components/common/Chip/Tag";
import { tagAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface TagsProps {
  handleOnClick: (event: React.MouseEvent) => void;
  tagValue: string[];
}

const Tags = ({ handleOnClick, tagValue }: TagsProps) => {
  return (
    <TagArea>
      {tagValue.map((tag) => {
        return (
          <div key={tag} style={{ cursor: "pointer" }} onClick={handleOnClick}>
            <Tag tag={tag} />
          </div>
        );
      })}
    </TagArea>
  );
};

const TagInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [tagValue, setTagValue] = useAtom(tagAtom);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTag = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const tagText = target.textContent;

    const newTagValue = tagValue.filter((v) => v !== tagText);
    setTagValue(newTagValue);
  };

  const handlePressEnter = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    if (event.nativeEvent.isComposing) return;
    if (!inputValue) return;
    if (tagValue.filter((v) => v == inputValue).length === 0) {
      setTagValue((prev) => [...prev, inputValue]);
    }
    setInputValue("");
  };

  return (
    <InputBox>
      <Label>태그</Label>
      <InputArea>
        {tagValue && <Tags handleOnClick={handleDeleteTag} tagValue={tagValue} />}
        <StyledInput type="text" value={inputValue} onChange={handleInputChange} placeholder={tagValue.length == 0 ? "입력 후 Enter" : ""} onKeyDown={handlePressEnter} />
      </InputArea>
    </InputBox>
  );
};

export default TagInput;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 1rem;

  font-size: 1.8rem;
  color: var(--Black33);

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.6rem;
  }
`;

const InputArea = styled.div`
  height: 4.8rem;

  padding: 1.4rem;
  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  position: relative;
  display: flex;
  align-items: flex-start;

  background-color: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    height: 4.8rem;

    padding: 1.4rem;
  }
`;

const StyledInput = styled.input`
  width: 30%;

  border: none;

  flex-grow: 1;

  font-size: 1.6rem;
  color: var(--Grayd9);

  &:focus {
    outline: none;

    color: var(--Black33);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
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
