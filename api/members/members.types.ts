export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

export interface MemberData {
  members: Member[];
  totalCount: number;
}

export interface GetMembersProps {
  dashboardId: number;
  size?: number;
  page?: number;
  token: string | null;
}

export interface DeleteMembersProps {
  memberId: string;
  token?: string;
}
