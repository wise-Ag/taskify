import { Invitation } from "@/api/invitations/invitations.types";

export interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  createdByMe: boolean;
}

export interface GetDashboardListData {
  dashboards: Dashboard[];
  totalCount: number;
  cursorId: number | null;
}

export interface GetDashboardInvitationsData {
  invitations: Invitation[];
  totalCount: number;
}

export interface DeleteDashboardProps {
  dashboardId: string;
  token: string;
}

export interface DeleteDashboardInvitationsProps {
  dashboardId: string;
  invitationId: string;
  token?: string;
}

export interface GetDashboardProps {
  dashboardId: string;
  token: string;
}

export interface GetDashboardInvitationsProps {
  dashboardId: string;
  page?: number;
  size?: number;
  token: string;
}

export interface GetDashboardListProps {
  navigationMethod: string;
  cursorId?: number;
  page?: number;
  size?: number;
  token: string;
}

export interface PostDashboardInvitationsProps {
  dashboardId: string;
  token: string;
}

export interface PutDashboardProps {
  dashboardId: string;
  token: string;
}
