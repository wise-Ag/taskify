import Kebab from "@/assets/icons/kebab.svg";
import Close from "@/assets/icons/close.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ModalInput from "../ModalInput/ModalInput";
import Tag from "../Chip/Tag";

const MOCK_DATA = {
  id: 3,
  title: "오늘할일정하기",
  description: "이편지는영국에서최초로시작되어어쩌구저쩌구편지를3일안에10명에게전달하면행운이어쩌구저쩌구",
  tags: ["일상", "필수"],
  dueDate: "2023.12.20",
  assignee: {
    profileImageUrl: "",
    nickname: "멋쟁이토마토",
    id: 1,
  },
  imageUrl: "",
  teamId: "1-08",
  columnId: 3,
  createdAt: "2023-12-23T12:37:14.500Z",
  updatedAt: "2023-12-23T12:37:14.500Z",
};

const TaskModal = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{MOCK_DATA.title}</Title>
        <Kebab alt="kebab" width={28} height={28} />
        <Close alt="kebab" width={28} height={28} />
      </TitleWrapper>
      <Tags>
        {MOCK_DATA.tags.map((tag, idx) => {
          return (
            <Tag key={idx} $bgColor="--Pinkf7" $textColor="--Pinkd5">
              {tag}
            </Tag>
          );
        })}
      </Tags>
      <ModalInput label="댓글" $inputType="댓글" />
    </Wrapper>
  );
};

export default TaskModal;

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

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;
const Tags = styled.div`
  display: flex;

  gap: 0.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    height: 50%;

    margin-right: 1.6rem;

    align-items: end;
    float: left;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;
  }
`;
