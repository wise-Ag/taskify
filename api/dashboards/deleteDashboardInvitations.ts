import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface deleteDashboardInvitationsProps {
  dashboardId: string;
  invitationId: string;
  token?: string;
}

export const deleteDashboardInvitations = async ({
  dashboardId = "198",
  invitationId = "38",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzQ3MzEsImlzcyI6InNwLXRhc2tpZnkifQ.S8Lvf7DmFuMC3gMvNt1eJylk5oW0hFxHhbXAcQTDP2E",
}: deleteDashboardInvitationsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.DASHBOARDS.DELETE_INVITATION(dashboardId, invitationId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    // if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
