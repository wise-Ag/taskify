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

export interface PutPasswordProps {
  password: string;
  newPassword: string;
  token: string | null;
}
