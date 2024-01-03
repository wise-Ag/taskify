export interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl?: string | null;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  dashboardId: number;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetCardListData {
  totalCount: number;
  cursorId: number | null;
  cards: Card[];
}

export interface GetCardProps {
  cardId: number;
  token?: string | null;
}

export interface GetCardListProps {
  size?: number;
  cursorId: number | null;
  columnId: number;
  token: string | null;
}

export interface CardProps {
  assigneeUserId?: number | null;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate?: string | null;
  tags: string[];
  imageUrl?: string | null;
  token: string | null;
}

export interface PutCardProps extends CardProps {
  cardId: number;
}

export interface DeleteCardProps {
  cardId: number;
  token: string | null;
}
