import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import AddIcon from "@/assets/icons/add-fillo.svg";
import EditIcon from "@/assets/icons/edit.svg";

const ImageUploadInput = () => {
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
    <ImageInputWrapper previewUrl={previewUrl}>
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
  );
};

export default ImageUploadInput;

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

const ImageInputWrapper = styled.div<{ previewUrl: string | null }>`
  width: 7.6rem;
  height: 7.6rem;

  border-radius: 6px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--MainLight);
  background-image: url(${(props) => props.previewUrl});
  background-size: cover;
  background-position: center;

  cursor: pointer;

  &:hover ${HoverOverlay} {
    display: ${(props) => (props.previewUrl ? "flex" : "none")};
  }
`;
