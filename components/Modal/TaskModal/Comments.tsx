import { DeviceSize } from "@/styles/DeviceSize";
import { styled } from "styled-components";
import ModalInput from "@/components/Modal/ModalInput/ModalInput";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteComments, getComments, postComments, putComments } from "@/api/comments";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Card } from "@/api/cards/cards.types";
import { Comment } from "@/api/comments/comments.types";
import { formatUpdatedAt } from "@/utils/FormatDate";
import NoProfileImage from "@/components/common/NoProfileImage/ProfileImage";
import { useAtom } from "jotai";
import { commentScrollAtom } from "@/states/atoms";

const Comments = ({ cardData }: { cardData: Card }) => {
  const [inputValue, setInputValue] = useState("");
  const [commentsData, setCommentsData] = useState<Comment[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [, setIsScrollActive] = useAtom(commentScrollAtom);
  const router = useRouter();
  const { boardid } = router.query;
  const token = localStorage.getItem("accessToken");

  const loadCommentsData = async () => {
    setIsLoading(true);
    if (commentsData.length > 0 && cursorId === null) {
      return;
    }
    const res = await getComments({
      cardId: cardData.id,
      size: 2,
      cursorId,
      token,
    });

    if (res) {
      setCommentsData((prev) => {
        return [...prev, ...res.comments];
      });
      setCursorId(res.cursorId);
    }
    watchCommentCount();
    setIsLoading(false);
  };

  const { targetRef, setIsLoading } = useInfiniteScroll({ callbackFunc: loadCommentsData });

  const watchCommentCount = () => {
    //댓글이 10개가 넘으면 스크롤 네비게이션 버튼 보이게
    commentsData.length > 10 ? setIsScrollActive(true) : setIsScrollActive(false);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (inputValue.trim()) {
      submitComment(inputValue);
      setInputValue("");
    }
  };

  const submitComment = async (comment: string) => {
    const res = await postComments({
      token,
      content: comment,
      cardId: cardData.id,
      columnId: cardData.columnId,
      dashboardId: Number(boardid),
    });

    if (res && commentsData.length == 0) setCommentsData([res].splice(0));
    if (res && commentsData.length > 0) setCommentsData([res, ...commentsData]);
    watchCommentCount();
  };

  const handleEditClick = (commentId: number, currentContent: string) => {
    setIsEditing(true);
    setEditingCommentId(commentId);
    setNewCommentContent(currentContent);
  };

  const handleDeleteClick = async (commentId: number) => {
    await deleteComments({ commentId, token });
    setCommentsData([...commentsData.filter((v) => v.id !== commentId)]);
    watchCommentCount();
  };

  const handleUpdateComment = async (commentId: number) => {
    const res = await putComments({
      commentId,
      token,
      content: newCommentContent,
    });
    if (res) {
      setCommentsData([...commentsData.map((v) => (v.id === commentId ? res : v))]);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    loadCommentsData();
  }, [boardid]);
  return (
    <>
      <StyledDiv>
        <ModalInput label="댓글" $inputType="댓글" value={inputValue} onChange={handleInputChange} onSubmitComment={handleCommentSubmit} />
      </StyledDiv>
      <CommentWrapper>
        {commentsData.map((comment) => (
          <CommentItem key={comment.id}>
            {comment.id === cursorId && <div ref={targetRef} />}
            <LeftWrapper>
              {comment.author.profileImageUrl ? (
                <ProfileImage url={comment.author.profileImageUrl} />
              ) : (
                <NoProfileImageWrapper>
                  <NoProfileImage id={comment.author.id} nickname={comment.author.nickname} />
                </NoProfileImageWrapper>
              )}
            </LeftWrapper>
            <RightWrapper>
              <InfoWrapper>
                {comment.author.nickname}

                <CommentDate>{formatUpdatedAt(comment.updatedAt)}</CommentDate>
              </InfoWrapper>
              {isEditing && editingCommentId === comment.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateComment(comment.id);
                  }}
                >
                  <CommentTextarea value={newCommentContent} onChange={(e) => setNewCommentContent(e.target.value)} rows={2} />
                  <Edit type="submit">저장</Edit>
                </form>
              ) : (
                <CommentContent>{comment.content}</CommentContent>
              )}
              <FunctionWrapper>
                {!isEditing || editingCommentId !== comment.id ? <Edit onClick={() => handleEditClick(comment.id, comment.content)}>수정</Edit> : null}
                {!isEditing || editingCommentId !== comment.id ? <Delete onClick={() => handleDeleteClick(comment.id)}>삭제</Delete> : null}
              </FunctionWrapper>
            </RightWrapper>
          </CommentItem>
        ))}
      </CommentWrapper>
    </>
  );
};
export default Comments;

const CommentWrapper = styled.div`
  margin-top: 1.6rem;
`;

const StyledDiv = styled.div`
  position: sticky;
  top: 2.7rem;
  background-color: var(--White);
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: top;

  img {
    width: 3.2rem;
    height: 3.2rem;

    border-radius: 50%;
  }
`;

const RightWrapper = styled.div`
  width: 100%;

  margin-left: 1rem;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  height: 10rem;

  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem;

  border: 1px solid var(--Grayd9);
  border-radius: 6px;

  &:focus {
    border-color: var(--Main);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

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

  margin-bottom: 0.8rem;
  padding: 1rem 0;

  font-size: 1.4rem;

  border-bottom: 1px solid var(--Grayee);

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

const Edit = styled.button`
  color: var(--Gray9f);
  font-size: 1.2rem;
  text-decoration-line: underline;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;

const Delete = styled.button`
  color: var(--Gray9f);
  font-size: 1.2rem;
  text-decoration-line: underline;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1rem;
  }
`;
const ProfileImage = styled.div<{ url: string }>`
  width: 2.7rem;
  height: 2.7rem;

  border-radius: 4.4rem;

  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const NoProfileImageWrapper = styled.div`
  width: 2.7rem;

  line-height: 2.7rem;
  font-size: 1.3rem;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 2.4rem;

    line-height: 2.4rem;
  }
`;
