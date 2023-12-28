export interface Invitation {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  dashboard: {
    id: number;
    title: string;
  };
  invitee: {
    id: number;
    email: string;
    nickname: string;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetInvitationsData {
  cursorId: number | null;
  invitations: Invitation[];
}

export interface GetInvitationProps {
  title?: string;
  size?: number;
  cursorId?: number;
  token: string;
}

export interface PutInvitationsProps {
  invitationId: number;
  token: string;
  inviteAccepted: boolean;
}
