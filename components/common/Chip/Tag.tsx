import { TAG_COLOR } from "@/constants/ColorConstant";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { isTagModifyAtom } from "@/states/atoms";
import { useAtom } from "jotai";

const Tag = ({ tag, handleOnClick, isModifyMode }: { tag: string; handleOnClick: (targetTag: string) => void; isModifyMode?: boolean }) => {
  const [isTagModify] = useAtom(isTagModifyAtom);
  const tagNum = tag?.charCodeAt(0) % 10;

  return (
    <Container $bgColor={TAG_COLOR[tagNum].bgColor} $textColor={TAG_COLOR[tagNum].textColor}>
      {tag}
      {isTagModify && isModifyMode && (
        <div
          style={{ height: "1.8rem" }}
          onClick={() => {
            handleOnClick(tag);
          }}
        >
          <TiDelete size={18} />
        </div>
      )}
    </Container>
  );
};

const Container = styled.span<{ $bgColor: string; $textColor: string }>`
  padding: 0.4rem 0.6rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 4px;
  background-color: ${(props) => props.$bgColor};

  color: ${(props) => props.$textColor};
  text-align: center;
  font-size: 1.5rem;

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

export default Tag;
