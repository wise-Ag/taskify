export interface UserData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostImageData {
  profileImageUrl: string;
}

export interface PostProfileImageProps {
  formData: FormData;
  token: string | null;
}

export interface PostUsersProps {
  email: string;
  nickname: string;
  password: string;
}

export interface PutUsersProps {
  nickname: string;
  profileImageUrl?: string | null;
  token: string | null;
}
