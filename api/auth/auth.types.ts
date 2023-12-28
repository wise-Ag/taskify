export interface User {
  accessToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface PostLoginProps {
  email: string;
  password: string;
}
