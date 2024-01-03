import Tag from "@/components/common/Chip/Tag";
import { isTagModifyAtom, tagAtom } from "@/states/atoms";
import { DeviceSize } from "@/styles/DeviceSize";
import { useAtom } from "jotai";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface TagsProps {
  handleOnClick: (targetValue: string) => void;
  tagValue: string[];
  isModifyMode?: boolean;
}

const Tags = ({ handleOnClick, tagValue, isModifyMode }: TagsProps) => {
  return (
    <TagArea>
      {tagValue.map((tag) => {
        return (
          <div key={tag} style={{ cursor: "pointer" }}>
            <Tag tag={tag} handleOnClick={handleOnClick} isModifyMode={isModifyMode} />
          </div>
        );
      })}
    </TagArea>
  );
};

const TagInput = ({ isModify = false }: { isModify?: boolean }) => {
  const [inputValue, setInputValue] = useState("");
  const [tagValue, setTagValue] = useAtom(tagAtom);
  const [isTagModify, setIsTagModify] = useAtom(isTagModifyAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsTagModify(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTag = (targetTag: string) => {
    const newTagValue = tagValue.filter((v) => v !== targetTag);
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
      <InputArea ref={containerRef} onClick={() => setIsTagModify(true)}>
        {tagValue && <Tags handleOnClick={handleDeleteTag} tagValue={tagValue} isModifyMode={isModify} />}
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
