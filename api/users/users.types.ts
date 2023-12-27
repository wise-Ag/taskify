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
  image: string;
  token?: string;
}
