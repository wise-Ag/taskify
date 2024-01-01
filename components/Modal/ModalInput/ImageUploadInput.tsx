import AddIcon from "@/assets/icons/add-fillo.svg";
import EditIcon from "@/assets/icons/edit.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import { ChangeEvent, useState } from "react";
import styled, { css } from "styled-components";

interface ImageUploadInputProps {
  type: "modal" | "account";
}

const ImageUploadInput = ({ type, className }: ImageUploadInputProps & { className?: string }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <InputBox>
      {type === "modal" && <Label>이미지</Label>}
      <ImageInputWrapper className={className} $previewUrl={previewUrl} type={type}>
        {!previewUrl && (
          <IconWrapper>
            <StyledAddIcon />
          </IconWrapper>
        )}
        <ImageInput type="file" accept="image/*" onChange={handleImageChange} />
        <HoverOverlay>
          <StyledEditIcon />
        </HoverOverlay>
      </ImageInputWrapper>
    </InputBox>
  );
};

export default ImageUploadInput;

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

const ImageInput = styled.input`
  width: 100%;
  height: 100%;

  position: absolute;

  opacity: 0;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAddIcon = styled(AddIcon)`
  width: 100%;
  height: auto;
`;

const HoverOverlay = styled.div`
  width: 100%;
  height: 100%;

  display: none;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  pointer-events: none;
`;

const StyledEditIcon = styled(EditIcon)`
  width: 2.8rem;
  height: 2.8rem;
`;

const ImageInputWrapper = styled.div<{ $previewUrl: string | null; type: "modal" | "account" }>`
  width: 7.6rem;
  height: 7.6rem;

  border-radius: 6px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--White);
  background-image: url(${(props) => props.$previewUrl});
  background-size: cover;
  background-position: center;

  cursor: pointer;

  ${(props) =>
    props.type === "account" &&
    css`
      width: 100%;
      height: 100%;
    `}

  &:hover ${HoverOverlay} {
    display: ${(props) => (props.$previewUrl ? "flex" : "none")};
  }
`;
