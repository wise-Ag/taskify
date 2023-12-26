import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface postDashboardInvitationsProps {
  dashboardId: string;
  token?: string;
}

export const postDashboardInvitations = async ({
  dashboardId = "198",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: postDashboardInvitationsProps) => {
  try {
    const res = await instance.post(
      ENDPOINTS.DASHBOARDS.POST_INVITATION(dashboardId),
      {
        email: "jieun2@codeit.com",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
