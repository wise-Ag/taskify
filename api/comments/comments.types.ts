export interface Comment {
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

export interface GetCommentsData {
  curdorId: number | null;
  comments: Comment[];
}

export interface DeleteCommentsProps {
  commentId: string;
  token: string;
}

export interface GetCommentsProps {
  cardId: number;
  size?: number;
  cursorId?: number;
  token: string;
}

export interface PutCommentsProps {
  commentId: string;
  token: string;
}
