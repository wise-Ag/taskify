export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
}

export interface GetCommentsData {
  comments: Comment[];
  cursorId: number | null;
}

export interface DeleteCommentsProps {
  commentId: number;
  token: string | null;
}

export interface GetCommentsProps {
  cardId: number;
  size?: number;
  cursorId?: number | null;
  token: string | null;
}

export interface PostCommentsProps {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
  token: string | null;
}

export interface PutCommentsProps {
  commentId: number;
  content: string;
  token: string | null;
}
