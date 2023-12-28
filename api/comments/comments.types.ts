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
  curdorId: number | null;
  comments: Comment[];
}

export interface DeleteCommentsProps {
  commentId: number;
  token: string;
}

export interface GetCommentsProps {
  cardId: number;
  size?: number;
  cursorId?: number;
  token: string;
}

export interface PutCommentsProps {
  commentId: number;
  token: string;
  content: string;
}
