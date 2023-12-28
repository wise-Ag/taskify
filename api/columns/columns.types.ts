export interface Columns {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetColumnsData {
  result: string;
  data: Columns[];
}

export interface CardImage {
  imageUrl: string;
}

export interface GetColumnsProps {
  dashboardId?: number;
  token?: string;
}

export interface PutColumnsProps {
  columnId: string;
  token: string;
}

export interface DeleteColumnsProps {
  columnId: string;
  token: string;
}

export interface PostCardImageProps {
  columnId: string;
  token: string;
}
