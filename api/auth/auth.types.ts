export interface User {
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string;
}

export interface PostLoginProps {
  email: string;
  password: string;
}
