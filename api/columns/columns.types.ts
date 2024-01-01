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

export interface PostColumnsProps {
  title: string;
  dashboardId: number;
  token: string | null;
}

export interface GetColumnsProps {
  dashboardId: number;
  token: string | null;
}

export interface PutColumnsProps {
  title: string;
  columnId: number;
  token: string | null;
}

export interface DeleteColumnsProps {
  columnId: number;
  token: string | null;
}

export interface PostCardImageProps {
  formData: FormData;
  columnId: number;
  token: string | null;
}
