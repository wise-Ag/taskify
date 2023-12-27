export interface Card {
  id: number;
  title: string;
  description: string;
  tags: [string];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCardListData {
  cards: Card[];
  totalCount: number;
  cursorId: number | null;
}

export interface GetCardProps {
  cardId: string;
  token?: string;
}

export interface GetCardListProps {
  size?: number;
  cursorId: number | null;
  columnId: number;
  token?: string;
}

export interface PutCardProps {
  cardId: string;
  token: string;
}

export interface DeleteCardProps {
  cardId: string;
  token?: string;
}
