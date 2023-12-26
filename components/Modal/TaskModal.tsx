import Kebab from "@/assets/icons/kebab.svg";
import Division from "@/assets/icons/category-division.svg";
import Close from "@/assets/icons/close.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import ModalInput from "../ModalInput/ModalInput";
import Tag from "../Chip/Tag";
import ColumnName from "../Chip/ColumnName";
import { formatUpdatedAt } from "@/utils/FormatDate";

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}

interface CommentData {
  comments: Comment[];
  cursorId: number;
}

const MOCK_DATA = {
  id: 3,
  title: "오늘할일정하기",
  description:
    "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다. WCH이라는 사람은 어쩌구저쩌구",
  tags: ["일상", "필수", "프론트", "상"],
  dueDate: "2023.12.20. 17:00",
  assignee: {
    profileImageUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTFfMTAy/MDAxNTM5MjI1OTcxNDc0.5Ww2lzCMKDp4TiuZ-V1sPYWJW2xg3rKPylziQ59iXWEg.GreYoty0qMT_4n_UkUkPGVVH8mJjv0tGl_YLI9eLpvYg.PNG.pola0216/%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD_22.png?type=w800",
    nickname: "멋쟁이토마토",
    id: 1,
  },
  imageUrl: "https://i.pinimg.com/564x/46/cb/8b/46cb8b3ea03237da9c847baaf9e0ec43.jpg",
  teamId: "1-08",
  columnId: 3,
  createdAt: "2023-12-23T12:37:14.500Z",
  updatedAt: "2023-12-23T12:37:14.500Z",
};

const COMMENT_MOCK_DATA: CommentData = {
  cursorId: 123,
  comments: [
    {
      id: 1,
      content: "첫 번째 댓글",
      createdAt: "2023-12-25T10:30:00Z",
      updatedAt: "2023-12-25T10:35:00Z",
      cardId: 123.45,
      author: {
        profileImageUrl: "https://t1.daumcdn.net/cfile/tistory/99867C335C780BEE26",
        nickname: "User1",
        id: 101,
      },
    },
    {
      id: 2,
      content: "두 번째 댓글",
      createdAt: "2023-12-25T11:15:00Z",
      updatedAt: "2023-12-25T11:20:00Z",
      cardId: 123.45,
      author: {
        profileImageUrl: "https://i.pinimg.com/236x/f2/cb/db/f2cbdb972f8d68b0cd66dac681af6e9f.jpg",
        nickname: "User2",
        id: 102,
      },
    },
    {
      id: 3,
      content: "세 번째 댓글 으아아아아아아아아아",
      createdAt: "2023-12-25T12:00:00Z",
      updatedAt: "2023-12-25T12:05:00Z",
      cardId: 123.45,
      author: {
        profileImageUrl: "https://image.cine21.com/resize/cine21/still/2005/1027/M0020038_wallace_gromit_24[S800,800].jpg",
        nickname: "User3",
        id: 103,
      },
    },
  ],
};

const TaskModal = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{MOCK_DATA.title}</Title>
        <IconContainer>
          <Kebab alt="kebab" width={28} height={28} />
          <Close alt="kebab" width={28} height={28} />
        </IconContainer>
      </TitleWrapper>
      <ContactDeadLineWrapper>
        <Contact>담당자</Contact>
        <DeadLine>마감일</DeadLine>
        <ContactName>
          <ProfileImageWrapper>
            <img src={MOCK_DATA.assignee.profileImageUrl} alt="Profile Image" />
          </ProfileImageWrapper>
          {MOCK_DATA.assignee.nickname}
        </ContactName>
        <DeadLineDate>{MOCK_DATA.dueDate}</DeadLineDate>
      </ContactDeadLineWrapper>
      <CategoryWrapper>
        <ColumnName status="To do" />
        <DivisionWrapper>
          <Division alt="category-division" width={10} height={20} />
        </DivisionWrapper>
        <Tags>
          {MOCK_DATA.tags.map((tag, idx) => {
            return (
              <Tag key={idx} $bgColor="--Pinkf7" $textColor="--Pinkd5">
                {tag}
              </Tag>
            );
          })}
        </Tags>
      </CategoryWrapper>
      <Description>{MOCK_DATA.description}</Description>
      <Image src={MOCK_DATA.imageUrl} alt="Task Image" />
      <ModalInput label="댓글" $inputType="댓글" />
      <CommentWrapper>
        {COMMENT_MOCK_DATA.comments.map((comment) => (
          <CommentItem key={comment.id}>
            <LeftWrapper>
              <img src={comment.author.profileImageUrl} alt="nickname" />
            </LeftWrapper>
            <RightWrapper>
              <InfoWrapper>
                {comment.author.nickname}
                <CommentDate>{formatUpdatedAt(comment.updatedAt)}</CommentDate>
              </InfoWrapper>
              <CommentContent>{comment.content}</CommentContent>
              <FunctionWrapper>
                <Edit>수정</Edit>
                <Delete>삭제</Delete>
              </FunctionWrapper>
            </RightWrapper>
          </CommentItem>
        ))}
      </CommentWrapper>
    </Wrapper>
  );
};

export default TaskModal;

const Wrapper = styled.div`
  width: 73rem;
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 8px;
  background: var(--White);
  border: 1px solid red;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;

    padding: 2.8rem 2rem 2.8rem 2rem;

    border-radius: 8px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;

  gap: 2.4rem;
`;

const ContactDeadLineWrapper = styled.div`
  margin-top: 2.8rem;
  padding: 1.2rem 1.6rem 1rem 1.6rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  border-radius: 8px;
  border: 1px solid var(--Grayd9);

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 1.6rem;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1 1 50%;

  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
const DeadLine = styled.div`
  display: flex;
  justify-content: flex-start;

  font-size: 1.4rem;
  font-weight: 600;
  flex: 1 1 50%;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
const ContactName = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 50%;

  font-size: 1.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;

  margin-right: 0.8rem;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeadLineDate = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 50%;

  font-size: 1.2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const CategoryWrapper = styled.div`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 1.6rem;
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
    height: auto;
  }
`;

const DivisionWrapper = styled.div`
  margin: 0 1rem;
`;

const Description = styled.div`
  width: 100%;

  margin: 1.6rem auto;

  overflow-wrap: break-word;
  word-wrap: break-word;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  text-align: left;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;

  margin-bottom: 2.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-bottom: 1.9rem;
  }
`;

const CommentWrapper = styled.div`
  margin-top: 1.6rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: top;

  img {
    width: 3.2rem;
    height: 3.2rem;

    margin-right: 1rem;

    border-radius: 50%;
  }
`;
const RightWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.8rem;

  font-size: 1.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const CommentDate = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border: 1px solid #ccc;

  font-size: 1.4rem;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.2rem;
  }
`;

const CommentContent = styled.div`
  margin: 0.6rem 0 1.2rem 0;

  display: flex;
  justify-content: flex-start;
`;

const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.2rem;
`;

const Edit = styled.div`
  color: var(--Gray9f);
  font-size: 1.2rem;
  text-decoration-line: underline;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

const Delete = styled.div`
  color: var(--Gray9f);
  font-size: 1.2rem;
  text-decoration-line: underline;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
